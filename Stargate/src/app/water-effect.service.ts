import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterEffectService {

  public canvas: HTMLCanvasElement;
  public width: number;
  public height: number;
  public texture: HTMLImageElement;

  private appearAlpha: number;
  private texPixels: any;
  private workBuffer: any;
  private alphaMap: number[][];
  private radiusOffset: number;

  constructor() { }

  public reset(canvas, texture, radius, radiusOffset: number = 0): void {
    this.canvas = canvas;
    this.texture = texture;
    this.width = radius * 2;
    this.height = radius * 2;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.appearAlpha = 50;
    this.radiusOffset = radiusOffset;
    this.buildBuffers();
  }

  private buildBuffers(): void {
    let img = this.texture;
    let canvas = this.canvas;
    let context = canvas.getContext("2d");
    let degtorad = Math.PI / 180;
    let radius:number = ( this.width >> 1 ) - this.radiusOffset;
    let centerX:number = this.width >> 1;
    let centerY:number = this.height >> 1;

    console.log(radius);

    context.clearRect(0, 0, this.width, this.height);
    context.save();

    context.beginPath();
    context.fillStyle = "red";
    context.moveTo(centerX, centerX);
    context.arc(centerX,centerY,radius, 0, 360 * degtorad);
    context.fill();
    context.closePath();

    context.globalCompositeOperation = "source-in";
    context.drawImage(img, 0, 0, this.width, this.height);

    context.restore();


    let pixels = context.getImageData(0, 0, this.width, this.height).data;
    let buffer = context.getImageData(0, 0, this.width, this.height);

    this.texPixels = pixels;
    this.workBuffer = buffer;

  }

  public draw(map, transform: boolean = true) {

    const canvas = this.canvas;
    const context = canvas.getContext("2d");
    const lightRefraction = 9.0;
    const lightReflection = 0.1;
    const width = this.width;
    const height = this.height;
    const right = width - 1;
    const bottom = height - 1;
    let x = 0;
    let y = 0;
    let xPix = 0;
    let yPix = 0;
    let pixel = 0;
    let pos = 0;
    let red = 0;
    let green = 0;
    let blue = 0;
    let previousPixels = this.texPixels;
    let nextPixels = this.workBuffer.data;
    let max = nextPixels.length;
    let strength = 0;
    let refraction = 0;
    let alpha: number = 0;
    let reflection: number = 0;


    if (transform == false) {
      context.putImageData(this.workBuffer, 0, 0);
      return;
    }

    for (let i = 0; i < max; i += 4) {

      alpha = previousPixels[i + 3];
      if (alpha == 0)
        continue;


      pixel = i / 4;
      x = pixel % width;
      y = (pixel - x) / width;

      strength = map[x][y];




      // Refraction of light in water
      refraction = (strength * lightRefraction) >> 0;
      reflection = (strength * lightReflection) + 1;


      xPix = x + refraction;
      yPix = y + refraction;

      if (xPix < 0) xPix = 0;
      if (yPix < 0) yPix = 0;
      if (xPix > right) xPix = right;
      if (yPix > bottom) yPix = bottom;

      // Get the pixel from input
      pos = ((yPix * width) + xPix) * 4;
      red = previousPixels[pos];
      green = previousPixels[pos + 1];
      blue = previousPixels[pos + 2];

      // improve brightness
      if (strength > 1) {
        reflection *= 2.5;
      }

      red *= reflection;
      green *= reflection;
      blue *= reflection;

      nextPixels[i] = red;
      nextPixels[i + 1] = green;
      nextPixels[i + 2] = blue;

      // progressive apparition
      nextPixels[i + 3] = (strength != 0) ? this.appearAlpha : 0;

    }

    // progressive apparition
    this.appearAlpha = (this.appearAlpha + 3 > 230) ? 230 : this.appearAlpha + 3;

    context.putImageData(this.workBuffer, 0, 0);
  }

}

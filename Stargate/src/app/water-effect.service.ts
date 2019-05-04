import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterEffectService {

  public canvas: HTMLCanvasElement;
  public width: number;
  public height: number;
  public texture: HTMLImageElement;

  private texPixels: any;
  private workBuffer: any;

  constructor() {}

  public reset(canvas, texture, width, height):void{
    this.canvas = canvas;
    this.texture = texture;
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;

    this.buildBuffers();
  }

  private buildBuffers(): void {
      let img = this.texture;
      let canvas = this.canvas;
      let context = canvas.getContext("2d");
      let degtorad = Math.PI / 180;

      context.clearRect(0,0,this.width, this.height);
      context.save();

      context.beginPath();
      context.fillStyle = "red";
      context.moveTo(this.width >> 1, this.height >> 1);
      context.arc(this.width >> 1, this.height >> 1, this.width >> 1, 0,  360 * degtorad );
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

      if (transform == false) {
          context.putImageData(this.workBuffer, 0, 0);
          return;
      }

      for (let i = 0; i < max; i += 4) {

          
          pixel = i / 4;
          x = pixel % width;
          y = (pixel - x) / width;
          
          strength = map[x][y];
          
          
          // Refraction of light in water
          refraction = (strength * lightRefraction) >> 0;
          xPix = x + refraction;
          yPix = y + refraction;
          
          if (xPix < 0) xPix = 0;
          if (yPix < 0) yPix = 0;
          if (xPix > width - 1) xPix = width - 1;
          if (yPix > height - 1) yPix = height - 1;
          
          // Get the pixel from input
          pos = ((yPix * width) + xPix) * 4;
          red = previousPixels[pos];
          green = previousPixels[pos + 1];
          blue = previousPixels[pos + 2];

          // Set the pixel to output
          strength = (strength * lightReflection) + 1;
          red *= strength;
          green *= strength;
          blue *= strength;

          nextPixels[i] = red;
          nextPixels[i + 1] = green;
          nextPixels[i + 2] = blue;
      }

      context.putImageData(this.workBuffer, 0, 0);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaindropService {

  constructor() { }

  public getRainDrop(width:number, height:number):number[][]{
    return this.create2DArray(this.createRadialCanvas(width, height));
  }

  private createRadialCanvas(width, height):HTMLCanvasElement {
    // Create a canvas
    let pointerCanvas = document.createElement('canvas');
    pointerCanvas.setAttribute('width', width);
    pointerCanvas.setAttribute('height', height);
    let pointerCtx = pointerCanvas.getContext('2d');

    // Create a drawing on the canvas
    let radgrad = pointerCtx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, height / 2);
    radgrad.addColorStop(0, '#fff');
    radgrad.addColorStop(1, '#000');

    pointerCtx.fillStyle = radgrad;
    pointerCtx.fillRect(0, 0, width, height);

    return pointerCanvas;
  }

  private create2DArray(canvas):number[][] {
    let width = canvas.width;
    let height = canvas.height;
    let i = 0;
    let n = 0;


    // Create an empty 2D  array
    let pointerArray = new Array(width);

    for (let x = 0; x < width; x++) {
      pointerArray[x] = new Array(height);
      for (let y = 0; y < height; y++) {
        pointerArray[x][y] = 0.0;
      }
    }

    // Convert gray scale canvas to 2D array
    let pointerCtx = canvas.getContext('2d');
    let imgData = pointerCtx.getImageData(0, 0, width, height);
    let pixels = imgData.data;

    for (i = 0; n = pixels.length, i < n; i += 4) {
      // Get the pixel from input
      let pixVal = pixels[i];// only use red
      let arrVal = pixVal / 255.0;

      let pixel = i / 4;
      let x = pixel % width;
      let y = (pixel - x) / width;

      pointerArray[x][y] = arrVal;
    }

    return pointerArray;
  }
}

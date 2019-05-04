import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterModelService {

  public resolution: number = 1.0;
  public damping: number = 0.985;
  public clipping: number = 5;
  public evolveThreshold: number = 0.05;
  public width: number = 1;
  public height: number = 1;
  public evolving: boolean = false;

  private previousFrame: number[][] = null;
  private currentFrame: number[][] = null;
  private dataFrame: number[][] = null;

  constructor(){}

  public reset(width, height, resolution) {

    let x: number = 0;
    let y: number = 0;

    this.resolution = resolution;

    this.width = Math.ceil(width / this.resolution);
    this.height = Math.ceil(height / this.resolution);

    this.previousFrame = new Array();
    this.currentFrame = new Array();
    this.dataFrame = new Array();

    /* rescaled frames */
    for (x = 0; x < this.width; x++) {
      this.previousFrame[x] = new Array();
      this.currentFrame[x] = new Array();

      for (y = 0; y < this.height; y++) {
        this.previousFrame[x][y] = 0.0;
        this.currentFrame[x][y] = 0.0;
      }
    }

    /* real scale frame */
    for (x = 0; x < width; x++) {
      this.dataFrame[x] = new Array();
      for (y = 0; y < height; y++) {
        this.dataFrame[x][y] = 0.0;
      }
    }
  }

  public touchWater(x, y, pressure, raindrop) {

    this.evolving = true;

    x = Math.floor(x / this.resolution);
    y = Math.floor(y / this.resolution);

    // Place the raindrop in the center of the mouse position
    if (raindrop.length > 4 || raindrop[0].length > 4) {
      x -= raindrop.length >> 1;
      y -= raindrop[0].length >> 1;
    }

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > this.width) x = this.width;
    if (y > this.height) y = this.height;

    // Big pixel block
    for (let i = 0; i < raindrop.length; i++) {

      if (x + i < 0 || x + i > this.width - 1)
        continue;

      for (let j = 0; j < raindrop[0].length; j++) {

        if (y + j >= 0 && y + j <= this.height - 1) {
          this.previousFrame[x + i][y + j] -= raindrop[i][j] * pressure;
        }

      }
    }
  }

  public compute() {

    if (this.evolving === false)
      return;


    this.evolving = false;

    let x = 0;
    let y = 0;
    let val = 0;
    let w = this.width;
    let h = this.height;
    let prev = this.previousFrame;
    let cur = this.currentFrame;
    let right = w - 1;
    let bom = h - 1;
    let damp = this.damping;


    for (x = 0; x < w; x++) {
      for (y = 0; y < this.height; y++) {

        // Handle borders correctly
        val = ((x == 0) ? 0 : prev[x - 1][y]) +
          ((x == right) ? 0 : prev[x + 1][y]) +
          ((y == 0) ? 0 : prev[x][y - 1]) +
          ((y == bom) ? 0 : prev[x][y + 1]);

        // Damping
        val = ((val / 2.0) - cur[x][y]) * damp;

        // // Clipping prevention
        val = (val > this.clipping) ? this.clipping : val;
        val = (val < -this.clipping) ? -this.clipping : val;

        if ((val > this.evolveThreshold || -val > this.evolveThreshold))
          this.evolving = true;

        cur[x][y] = val;
      }
    }

    // Swap buffer references
    this.previousFrame = cur;
    this.currentFrame = prev;
  }

  public getInterpolatedFrame() {

    if (this.resolution == 1.0)
      return this.currentFrame;

    if (this.evolving == false)
      return this.dataFrame;

    let factor = 1 / this.resolution;
    let map = this.currentFrame;
    let x = 0;
    let y = 0;
    let i = 0;
    let j = 0;
    let cols = this.dataFrame.length;
    let rows = this.dataFrame[0].length;
    let right = this.width - 1;
    let bottom = this.height - 1;
    let xF = 0;
    let yF = 0;
    let xC = 0;
    let yC = 0;
    let br = 0;
    let bl = 0;
    let tr = 0;
    let tl = 0;
    let xChange = 0;
    let yChange = 0;
    let buffer = this.dataFrame;

    for (i = 0; i < cols; i++) {

      for (j = 0; j < rows; j++) {

        x = i * factor;
        y = j * factor;

        xF = x >> 0;
        yF = y >> 0;
        xC = xF + 1;
        yC = yF + 1;

        if (xC > right)
          xC = xF;

        if (yC > bottom)
          yC = yF;

        br = map[xF][yF];
        bl = map[xC][yF];
        tr = map[xF][yC];
        tl = map[xC][yC];
        xChange = xC - x;
        yChange = yC - y;

        buffer[i][j] = (
          tl * (1 - xChange) * (1 - yChange) +
          tr * (xChange) * (1 - yChange) +
          bl * (yChange) * (1 - xChange) +
          br * xChange * yChange
        );
      }
    }

    return this.dataFrame;
  }

  public getCurrentFrame() {

    if (this.resolution == 1.0)
      return this.currentFrame;

    if (this.evolving == false)
      return this.dataFrame;

    let factor: number = 1 / this.resolution;
    let map = this.currentFrame;
    let x = 0;
    let y = 0;
    let i = 0;
    let j = 0;
    let cols = this.width * this.resolution;
    let rows = this.height * this.resolution;

    for (i = 0; i < cols; i++) {

      for (j = 0; j < rows; j++) {
        x = (i * factor) >> 0;
        y = (j * factor) >> 0;
        this.dataFrame[i][j] = map[x][y];
      }
    }

    return this.dataFrame;
  }


}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WormHoleService {

  private nextRoute: string;

  constructor(private router: Router) {
    this.nextRoute = null;
  }

  public getWormholeVideo(): string {
    let tmp: number = Math.floor(Math.random() * 5) + 1;
    return "./assets/wormHoleVideo/worm" + tmp + ".mp4";
  }

  public next(): void {
    this.router.navigate(['/', this.nextRoute]);
  }

  public travel(p_nextRoute: string, p_delayBeforeTravel: number = 0): void {

    let worm: string = 'wormhole';
    this.nextRoute = p_nextRoute;

    setTimeout(
      () => {
        this.nextRoute = p_nextRoute;
        this.router.navigate(['/', worm]);
      },
      p_delayBeforeTravel
    );

  }
}

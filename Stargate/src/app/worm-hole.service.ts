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

  public travel(p_nextRoute: string, p_delayBeforeTravel: number = 0): void {


    let tmp = Math.floor(Math.random() * Math.floor(5)) + 1;
    let timeOutWorm: number = 0;
    if (tmp == 1) { timeOutWorm = 8000 };
    if (tmp == 2) { timeOutWorm = 15000 };
    if (tmp == 3) { timeOutWorm = 9000 };
    if (tmp == 4) { timeOutWorm = 14000 };
    if (tmp == 5) { timeOutWorm = 12000 };

    let worm: string = 'worm-hole' + tmp;

    setTimeout(
      () => {
        this.nextRoute = p_nextRoute;
        this.router.navigate(['/', worm]);
      }, 
      p_delayBeforeTravel
    );

    setTimeout(
      () => {
            this.router.navigate(['/', this.nextRoute]);
      }, 
      p_delayBeforeTravel + timeOutWorm
    )

  }
}

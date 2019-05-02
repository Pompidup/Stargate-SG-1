import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.css']
})
export class GateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public travel(p_address: number[]): void {

    for (let i: number = 0; i < 7; i++) {
      this._spin(i);
    }

    setTimeout(() => this._vortex(), 28000);

  }

  private random() {
    let tmp: number = Math.floor(Math.random() * Math.floor(5));
    console.log(tmp);
    return tmp + 1;
  };

  private calcTimeOut(tmp) {
    let timeOutWorm:number = 0;
    if (tmp == 1) { timeOutWorm = 8000 };
    if (tmp == 2) { timeOutWorm = 15000 };
    if (tmp == 3) { timeOutWorm = 9000 };
    if (tmp == 4) { timeOutWorm = 14000 };
    if (tmp == 5) { timeOutWorm = 12000 };
    console.log('valeur de time : ', timeOutWorm);
    return timeOutWorm;
  }

  private _vortex(): void {

    let waterSound: HTMLAudioElement = new Audio("assets/sounds/water.mp3");
    let vortexSound: HTMLAudioElement = new Audio("assets/sounds/open.mp3");
    let waterEffect: any = document.getElementsByClassName("water")[0];
    vortexSound.play();
    setTimeout(
      () => {
        waterEffect.style.opacity = '1';
        waterSound.play();
        setTimeout(
          () => {
            waterSound.pause();
            let tmp = this.random();
            let time = this.calcTimeOut(tmp);
            let worm: string = 'worm-hole' + tmp;
            console.log("contenu de worm", worm);
            this.router.navigate(['/', worm]);
            setTimeout(
              () => {
                this.router.navigate(['/', 'quest']);
              },
              time
            )
          },
          6100
        )
        //setTimeout(() => this.router.navigate(['/', 'quest']), 3800, waterSound.pause(), waterSound.currentTime = 0);
      },
      1000
    )
  };



  private _spin(p_num: number): void {

    let rotationSound: HTMLAudioElement = new Audio("assets/sounds/rotate.mp3");
    let lockedSound: HTMLAudioElement = new Audio("assets/sounds/chevron_lock.mp3");
    let ring: any = document.getElementsByClassName("ring")[0];

    // console.log(waterEffect);
    // let lock: any = document.getElementsByClassName("lock")[p_num];
    setTimeout(
      () => {
        rotationSound.pause();
        rotationSound.currentTime = 8;
        rotationSound.volume = 0.5;
        rotationSound.play();
        ring.setAttribute("class", "ring rotation" + (p_num + 1));
        // lock.setAttribute("class", "lock"+(p_num+1) + " lock base-on center-on");

        setTimeout(
          () => {
            let lock: any = document.getElementsByClassName("lock")[p_num];
            console.log(lock);
            let base_off: any = lock.getElementsByClassName("base-off")[0];
            // console.log(base_off);
            let base_on: any = lock.getElementsByClassName("base-on")[0];
            let center_off: any = lock.getElementsByClassName("center-off")[0];
            let center_on: any = lock.getElementsByClassName("center-on")[0];

            base_off.style.opacity = '0';
            base_on.style.opacity = '1';
            center_off.style.opacity = '0';
            center_on.style.opacity = '1';
            base_on.style.transform = 'translateY(-10px)';

          },
          3500
        )



        //base_on.style.transition = 'transform 1s';

        // waterEffect.style.opacity = '1';
        //base_on.style.transition = 'transition-delay: 0.5s';
        //base_on.style.transform = 'translateY(0px)';
        // console.log(p_num);

        setTimeout(
          () => {
            lockedSound.pause();
            lockedSound.currentTime = 0;
            lockedSound.play();
          },
          2000

        )

      },
      p_num * 4000
    );
  }

}

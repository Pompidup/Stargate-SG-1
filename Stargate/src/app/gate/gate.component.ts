import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WaterEffectService } from '../water-effect.service';
import { WaterModelService } from '../water-model.service';
import { RaindropService } from '../raindrop.service';


@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.css']
})
export class GateComponent implements OnInit, OnDestroy {

  private raindrop: number[][];
  private timeout;

  constructor(
    private router: Router,
    private waterEffect: WaterEffectService,
    private waterModel: WaterModelService,
    private raindropService: RaindropService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    clearTimeout(this.timeout);
  }

  private doWater():void{
    let img = new Image();
    img.addEventListener(
      "load",
      () => {
        
        let canvas = document.querySelector(".water");
        this.raindrop = this.raindropService.getRainDrop(8, 8);

        this.waterModel.reset(512, 512, 4);
        this.waterModel.touchWater(256, 256, 15, this.raindropService.getRainDrop(32, 32) );
        this.waterEffect.reset(canvas, img, 512, 512);
        this.render();
      }
    );
    img.src = "./assets/images/stargate.png";
  }

  private render(): void {

    let x:number = 0;
    let y:number = 0;
    let random:number = Math.random();

    if( random > 0.1 ){
      x = ( this.waterEffect.width >> 2 ) + ( Math.random() * this.waterEffect.width >> 1 );
      y = (this.waterEffect.height >> 2 ) + ( Math.random() * this.waterEffect.height >> 1);
      this.waterModel.touchWater(x, y, -Math.random() * 2, this.raindrop);
    }

    this.waterModel.compute();
    this.waterEffect.draw(this.waterModel.getInterpolatedFrame(), this.waterModel.evolving);
    this.timeout = setTimeout(this.render.bind(this), 16);
  }

  public travel(p_address: number[]): void {

    for (let i: number = 0; i < 7; i++) {
      this._spin(i);
    }

    setTimeout(() => this._vortex(), 28000);

  }

  private calcTimeOut(tmp) {
    let timeOutWorm: number = 0;
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
    vortexSound.play();

    setTimeout(
      () => {
        this.doWater();
        waterSound.play();
        
        /*
        setTimeout(
          () => {
            waterSound.pause();
            let tmp = Math.floor(Math.random() * Math.floor(5)) + 1;
            let time = this.calcTimeOut(tmp) ;
            let worm: string = 'worm-hole' + tmp;
            this.router.navigate(['/', worm]);
            setTimeout(
              () => {
                this.router.navigate(['/', 'quest']);
              },
              time
            )
          },
          10000
        );
        */
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

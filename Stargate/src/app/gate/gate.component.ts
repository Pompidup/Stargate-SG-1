import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.css']
})
export class GateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public travel(p_address: number[]): void {
    
    for( let i:number = 0; i < 7; i++ ){
      this._spin(i);
    }

    setTimeout( () => this._vortex(), 28000 );

  }

  private _vortex():void{

    let waterSound: HTMLAudioElement = new Audio("assets/sounds/water.mp3");
    let vortexSound: HTMLAudioElement = new Audio("assets/sounds/open.mp3");
    vortexSound.play();
    setTimeout( () => waterSound.play(), 4000);

  }

  private _spin(p_num:number): void {

    let rotationSound: HTMLAudioElement = new Audio("assets/sounds/rotate.mp3");
    let lockedSound: HTMLAudioElement = new Audio("assets/sounds/chevron_lock.mp3");
    let ring: any = document.getElementsByClassName("ring")[0];
    setTimeout(
      () => {
        rotationSound.pause();
        rotationSound.currentTime = 8;
        rotationSound.volume = 0.5;
        rotationSound.play();
        ring.setAttribute("class", "ring rotation" + (p_num + 1) );
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

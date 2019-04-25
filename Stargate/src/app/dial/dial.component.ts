import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.css']
})
export class DialComponent implements OnInit {

  @Output()
  public onDestinationComplete: EventEmitter<number[]>;
  private _signs: number[];

  constructor() {
    this._signs = [];
    this.onDestinationComplete = new EventEmitter<number[]>();
  }

  ngOnInit() {
  }

  public onStart() {
    if (this._signs.length >= 7)
      this.onDestinationComplete.emit(this._signs);
  }

  public onPress(p_num: number, p_buttonClass: string): void {
    if (this._signs.length >= 7 || this._signs.indexOf(p_num) > -1)
      return;


    let buttonSound: HTMLAudioElement = new Audio("assets/sounds/dhd_select.mp3");
    buttonSound.pause();
    buttonSound.currentTime = 0;
    buttonSound.play();

    this._signs.push(p_num);
    let btn = document.querySelector("." + p_buttonClass);
    let classes: string = btn.getAttribute("class");
    classes += " active";
    btn.setAttribute("class", classes);
  }

}

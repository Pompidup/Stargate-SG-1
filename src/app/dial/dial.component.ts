import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { tabCode, code } from '../codeDial';
@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.css']
})
export class DialComponent implements OnInit {

  @Output()
  public onDestinationComplete: EventEmitter<number[]>;
  private _signs: number[];
  private btnNumber: string[] = [];
  private tabcode: code[] = tabCode;
  private tmp: string[] = this.tabcode[0].btn;
  public codeOk: boolean = false;

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
    // console.log(p_buttonClass);
    this.btnNumber.push(p_buttonClass);
    // console.log(this.btnNumber);
    // console.log(this.tabcode[0].btn);
    // console.log(this.tmp);
    this.testCode();

  }

  public testCode(): boolean {

    for (let i: number = 0; i < this.btnNumber.length; i++) {
      if (this.btnNumber[i] == this.tmp[i]) {
        this.codeOk = true;
      } else {
        this.codeOk = false;
      }
    };

    if (this.codeOk){
  //    console.log("Bien joué champion")
    } else {
  //    console.log("FAILLLLLLLEEEEDDD")
    };
    return this.codeOk;

  };



}

import { Component, OnInit } from '@angular/core';
import { player1, player2, player3, score } from '../scorePlayer';

@Component({
  selector: 'app-hightscore',
  templateUrl: './hightscore.component.html',
  styleUrls: ['./hightscore.component.css']
})
export class HightscoreComponent implements OnInit {

  public p1:score = player1;
  public p2:score = player2;
  public p3:score = player3;

  constructor() { }

  ngOnInit() {
  }

}

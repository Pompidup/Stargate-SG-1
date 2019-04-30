import { Component, OnInit } from '@angular/core';
import { quest1 } from '../nasaConst';
import { nasa } from '../nasaClassInfo';
import { NgForm } from '@angular/forms';
import { player3 } from '../scorePlayer';

@Component({
  selector: 'app-finalquiz',
  templateUrl: './finalquiz.component.html',
  styleUrls: ['./finalquiz.component.css']
})
export class FinalquizComponent implements OnInit {

  public firstQuest: nasa[] = quest1;
  public tmpScore:number = 0;

  public q1: string = "Title of picture ?";
  public answerQ1: string[] = [
    this.firstQuest[0].title,
    "title1",
    "title2",
  ];

  public q2: string = "Nasa Identification ?"
  public answerQ2: string[] = [
    "00110100111010",
    "La réponse est idNasa",
    this.firstQuest[0].idNasa,
  ];
  public q3: string = "Stargate secret Identification ?"
  public answerQ3: string[] = [
    "C'est un secret",
    this.firstQuest[0].idMission,
    "Bonjour demandez mot ?",
  ];

  check(e){
    this.tmpScore
    if (e.target.checked){this.tmpScore += 100; console.log(this.tmpScore)};
  }
  updatescore(){
    player3.score = this.tmpScore;
    console.log(player3)
  }


  constructor() {

  }

  ngOnInit() {



  }
}

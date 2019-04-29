import { Component, OnInit } from '@angular/core';
import { quest1 } from '../nasaConst';
import { nasa } from '../nasaClassInfo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public firstQuest: nasa[] = quest1;
  public q1: string = "Title of picture ?";
  public answerQ1: string[] = [
    this.firstQuest[0].title,
    "title1",
    "title2",
    "title3",
  ];

  public q2: string = "Nasa Identification ?"
  public answerQ2: string[] = [
    "00110100111010",
    "La réponse est idNasa",
    this.firstQuest[0].idNasa,
    "Yorann",
  ];
  public q3: string = "Stargate secret Identification ?"
  public answerQ3: string[] = [
    "C'est un secret",
    this.firstQuest[0].idMission,
    "Bonjour demandez mot ?",
  ];

  onFormSubmit(form: NgForm) {
  }

constructor() {
  console.log(this.answerQ1[0])
}

ngOnInit() {


}

}





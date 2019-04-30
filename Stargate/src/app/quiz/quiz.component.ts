import { Component, OnInit } from '@angular/core';
import { nasa } from '../nasaClassInfo';
import { quest1, quest2, quest3 } from '../nasaConst';
import { player3 } from '../scorePlayer';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public firstQuest: nasa[] = quest1;

  choosenQuest() {
    if (player3.questProgress === 1) {
      this.firstQuest = quest1
      console.log(" 1ST")
    } else if (player3.questProgress === 2) {
      this.firstQuest = quest2
      console.log(" 2ND")
    } else {
      this.firstQuest = quest3
      console.log("3rd")
    }
  }

  constructor() {

  }

  ngOnInit() {
 this.choosenQuest();

  }

}





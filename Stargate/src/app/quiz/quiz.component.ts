import { Component, OnInit } from '@angular/core';
import { nasa } from '../nasaClassInfo';
import { quest1 } from '../nasaConst';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public firstQuest: nasa[] = quest1;

  constructor() {

  }

  ngOnInit() {


  }

}





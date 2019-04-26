import { Component, OnInit } from '@angular/core';
import { quest1 } from '../nasaConst';
import { nasa } from '../nasaClassInfo';


@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  public firstQuest: nasa[] = quest1;
  public truncDescription: string = '';

  getRandomNasa(param_apiObject){

  }

  constructor() {
    this.truncDescription = this.firstQuest[0].description.substring(10, 25);
  }

  ngOnInit() {
  }

}

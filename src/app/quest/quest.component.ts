import { Component, OnInit } from '@angular/core';
import { quest1, quest2, quest3 } from '../nasaConst';
import { nasa } from '../nasaClassInfo';
import { player3 } from '../scorePlayer';


@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {


  public firstQuest: nasa[] = quest1;
  public truncDescription: string = '';

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
    this.truncDescription = this.firstQuest[0].description.substring(10, 25);

  }



  ngOnInit() {
    this.choosenQuest();
  }
}

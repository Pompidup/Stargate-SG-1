
import { Component, OnInit } from '@angular/core';
import { quest1 } from '../nasaConst';
import { nasa } from '../nasaClassInfo';


@Component({
  selector: 'app-picture-viewer',
  templateUrl: './picture-viewer.component.html',
  styleUrls: ['./picture-viewer.component.css']
})
export class PictureViewerComponent implements OnInit {

  public firstQuest: nasa[] = quest1;


    constructor() {


     }

    ngOnInit() {
    }

  }

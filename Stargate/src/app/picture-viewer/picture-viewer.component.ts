import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
import { NasaEPICService } from '../nasa-epic.service';

@Component({
  selector: 'app-picture-viewer',
  templateUrl: './picture-viewer.component.html',
  styleUrls: ['./picture-viewer.component.css']
})

export class PictureViewerComponent {

  results: string[];

  constructor(private myService: NasaService) {
    this.results = [];

    this.myService.getNasaresults("saturn").subscribe(
      (param_nasa: string[]) => {
        this.results = param_nasa;
        console.log(this.results[0]);
      }
    )
  }
}
/*
export class PictureViewerComponent {
  resultsEpic: string[];

  constructor(private myEpicService: NasaEPICService) {
    this.resultsEpic = [];

    this.myEpicService.getNasaEpicResults().subscribe(
      (cacahuete: string[]) => {
        this.resultsEpic = cacahuete;
        console.log(this.resultsEpic);
      }
    )
  }

}
*/



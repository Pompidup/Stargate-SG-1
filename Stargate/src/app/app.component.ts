import { Component } from '@angular/core';
import { NasaService } from './nasa.service';
import { quest1 } from './nasaConst';
import { nasa } from './nasaClassInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stargate';
  results: nasa[];



  constructor(private myService: NasaService) {
    this.results = [];

    this.myService.getNasaresults("mars").subscribe(
      (param_nasa: nasa[]) => {
        this.results = param_nasa;
      //  console.log("contenu de results");
      //  console.log(this.results);
      //  for (let i:number = 0; i < this.results.length; i++){

     //     quest1[i].description = this.results[i].data[0].description;
     //   }
      }
    )
  }
}


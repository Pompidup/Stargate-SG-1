import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { nasa } from './nasaClassInfo';
import { quest1 } from './nasaConst';
import { quest } from './nasaConst';




@Injectable({
  providedIn: 'root'
})

export class NasaService {
  constructor(private myService: HttpClient) {

  }

  public getNasaresults(param_query: string): Observable<any> {

    const url: string = "https://images-api.nasa.gov/search?q=" + param_query;

    const obs: Observable<any> = this.myService.get(url);

    const treatment = (param_data: any) => {

      let collection: any = param_data.collection;
      let items: any[] = collection.items;
      let current = null;

      for (let i: number = 0; i < items.length; i++) {

        current = items[i];

        if (current !== 0) {
          const tmp: nasa = new nasa();
          tmp.description = current.data[0].description;
          tmp.image = current.links[0].href;
          tmp.idNasa = current.data[0].nasa_id;
          tmp.idMission = current.data[0].secondary_creator;
          tmp.title = current.data[0].title;
          quest.push(tmp);
          //  console.log("contenu de quest1 dans le service");
         // console.log(quest);

        }
      }
      for (let i: number = 0; i < 6; i++) {
        let tmp: number = Math.floor(Math.random() * Math.floor(quest.length));
        quest1.push(quest[tmp]);
        console.log(quest1);
      }
      return quest1;
    };


    return obs.pipe(map(treatment));
  }
}
/*
    const url: string = "https://images-api.nasa.gov/search?q=" + param_query;

    const obs: Observable<any> = this.myService.get(url);

    const treatment = (param_data: any) => {

      //  let collection: any = param_data.collection;
      //  let items: any[] = collection.items;
      //  let results: string[] = [];
      let current = null;
      // let tmpList:infoQuest[] = []
      for (let i: number = 0; i < param_data.length; i++) {

        current = param_data;
        if (current.links.length > 0) {
          let tmp: infoQuest = new infoQuest();
          tmp.title = current.collection.items.data[0].title;
          console.log(current.collection.items.data[0].title)
          tmp.description = current.collection.items.data[0].description;
          tmp.image = current.collection.items.links[0].href;
          infoNasaQuest.push(tmp);
        }
      }

      return infoNasaQuest;
    };
    return obs.pipe(map(treatment));
  }


}
*/

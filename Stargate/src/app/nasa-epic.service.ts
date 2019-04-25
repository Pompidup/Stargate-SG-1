import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NasaEPICService {

  constructor(private myEpicService: HttpClient) { }



  public getNasaEpicResults(): Observable<any> {
    const url: string = "https://api.nasa.gov/EPIC/api/natural?api_key=YSl8uqsyvPdL28bMF1lStJKwrEp0iM2leaMHyX6X";
    const obs: Observable<any> = this.myEpicService.get(url);
    const treatment = (param_data: any) => {
      let table: any[] = param_data;
      // let items: any[] = table.caption;
      let results: string[] = [];
      let current = null;

      for (let i: number = 0; i < table.length; i++) {
        current = table[i].date;
       // console.log(table[0].identifier);
       // console.log(current.identifier);
        if (current.length > 0) {
          results.push(current);

        }
      }
      return results;
    };
    return obs.pipe(map(treatment));
  }

}

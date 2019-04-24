import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
      let results: string[] = [];
      let current = null;

      for (let i: number = 0; i < items.length; i++) {

        current = items[i];

        if (current.links.length > 0) {
          results.push(current);
        }
      }
      return results;
    };
    return obs.pipe(map(treatment));
  }
}

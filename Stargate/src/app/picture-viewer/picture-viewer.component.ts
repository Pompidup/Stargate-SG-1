import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-picture-viewer',
  templateUrl: './picture-viewer.component.html',
  styleUrls: ['./picture-viewer.component.css']
})
export class PictureViewerComponent {

  images:string[];

  constructor(private myService:NasaService) {
    this.images = [];

    this.myService.getNasaImages("moon").subscribe(
      (param_images:string[]) => {
        this.images = param_images;
      }
    )
  }

}

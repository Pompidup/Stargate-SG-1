import { Component, OnInit } from '@angular/core';
import { quest1, quest2, quest3 } from '../nasaConst';

@Component({
  selector: 'app-stargate',
  templateUrl: './stargate.component.html',
  styleUrls: ['./stargate.component.css']
})
export class StargateComponent implements OnInit {

  constructor() {
    console.log(quest1);
    console.log(quest2);
    console.log(quest3);
   }

  ngOnInit() {


  }

}


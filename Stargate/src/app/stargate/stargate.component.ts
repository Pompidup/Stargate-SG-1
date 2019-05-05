import { Component, OnInit, ViewChild } from '@angular/core';
import { quest1, quest2, quest3 } from '../nasaConst';
import { GateComponent } from '../gate/gate.component';

@Component({
  selector: 'app-stargate',
  templateUrl: './stargate.component.html',
  styleUrls: ['./stargate.component.css']
})
export class StargateComponent implements OnInit {

  @ViewChild(GateComponent) gate:GateComponent;

  constructor() {}

   public travel(p_adress:number[]):void{
    this.gate.travel(p_adress);
   }

  ngOnInit() {}

}


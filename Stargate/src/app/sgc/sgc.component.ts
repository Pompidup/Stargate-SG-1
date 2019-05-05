import { Component, OnInit, ViewChild } from '@angular/core';
import { GateComponent } from '../gate/gate.component';

@Component({
  selector: 'app-sgc',
  templateUrl: './sgc.component.html',
  styleUrls: ['./sgc.component.css']
})
export class SGCComponent implements OnInit {

  @ViewChild(GateComponent) 
  private gate:GateComponent;

  constructor() { }

  ngOnInit() {}

  public travel(p_adress:number[]):void{
    this.gate.travel(p_adress);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { quest1, quest2, quest3 } from '../nasaConst';
import { GateComponent } from '../gate/gate.component';
import { WormHoleService } from '../worm-hole.service';

@Component({
  selector: 'app-stargate',
  templateUrl: './stargate.component.html',
  styleUrls: ['./stargate.component.css']
})
export class StargateComponent implements OnInit {

  @ViewChild(GateComponent) gate: GateComponent;

  constructor(private wormHole: WormHoleService) { }

  public travel(p_adress: number[]): void {
    // open gate 
    this.gate.travel(p_adress);
  }

  public enterWormHole(): void {
    // travel throught wormhole in 10s and go to "quest"
    this.wormHole.travel("quest", 10000);
  }

  ngOnInit() { }

}


import { Component, OnInit, ViewChild } from '@angular/core';
import { GateComponent } from '../gate/gate.component';
import { WormHoleService } from '../worm-hole.service';

@Component({
  selector: 'app-sgc',
  templateUrl: './sgc.component.html',
  styleUrls: ['./sgc.component.css']
})
export class SGCComponent implements OnInit {

  @ViewChild(GateComponent)
  private gate: GateComponent;


  private travelAllowed: boolean;

  constructor(private wormHole: WormHoleService) {

  }

  ngOnInit() {
    this.travelAllowed = false;
  }

  public travel(p_adress: number[]): void {
    // open gate 
    this.gate.travel(p_adress);
  }

  public allowTravel(): void {
    this.travelAllowed = true;
  }

  public enterWormHole(): void {
    // if gate is not opened
    if( this.travelAllowed == false )
      return;

    // travel throught wormhole in 0s and go to "quest"
    this.wormHole.travel("quest", 0);
  }

}

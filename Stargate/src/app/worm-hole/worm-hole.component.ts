import { Component, OnInit } from '@angular/core';
import { tabWorm } from '../wormVideo';

@Component({
  selector: 'app-worm-hole',
  templateUrl: './worm-hole.component.html',
  styleUrls: ['./worm-hole.component.css']
})
export class WormHoleComponent implements OnInit {

  random() {
    let tmp: number = Math.floor(Math.random() * Math.floor(tabWorm.length -1));
    console.log(tmp);
    console.log(tabWorm[tmp].link);
    let tmp2 = tabWorm[tmp].link;
  }
  

  constructor() { }

  ngOnInit() {
    this.random()
  }

}

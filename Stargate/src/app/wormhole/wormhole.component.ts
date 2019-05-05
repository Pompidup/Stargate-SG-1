import { Component, OnInit } from '@angular/core';
import { WormHoleService } from '../worm-hole.service';
import { Video } from '../wormVideo';

@Component({
  selector: 'app-wormhole',
  templateUrl: './wormhole.component.html',
  styleUrls: ['./wormhole.component.css']
})
export class WormholeComponent implements OnInit {

  public videoSrc:string;
  public videoStyle:string;
  public fired:boolean = false;
  
  constructor( private wormholeService:WormHoleService) { 
    this.videoSrc = null;
    this.videoStyle = "whitepanel";
  }

  public start():void{
    this.videoStyle = "whitepanel fadeout";
  }
  
  ngOnInit() {
    this.videoSrc = this.wormholeService.getWormholeVideo();
  }

  public onPlay(event):void{
    let video:HTMLVideoElement = event.target as HTMLVideoElement;
    if( video.duration - video.currentTime <= 3 && this.fired == false ){
      this.videoStyle = "whitepanel fadein";
      this.fired = true;
    }
  }

  public endHandler():void{
    this.wormholeService.next();
  }

}

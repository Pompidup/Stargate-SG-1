import { Injectable } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  static DHD_SELECT1: string = "dhd_select1";
  static DHD_SELECT2: string = "dhd_select2";
  static WATER_HORIZON: string = "water_horizon";
  static OPEN_GATE: string = "open_gate";
  static CHEVRON_LOCKED: string = "chevron_locked";
  static RING_ROTATION: string = "ring_rotation";
  static WORM_HOLE: string = "worm_hole";

  private _sounds: any[];

  constructor() {
    this._sounds = [
      { id: SoundService.CHEVRON_LOCKED, url: "assets/sounds/chevron_lock.mp3", audio: null },
      { id: SoundService.DHD_SELECT1, url: "assets/sounds/dhd_select.mp3", audio: null },
      { id: SoundService.DHD_SELECT2, url: "assets/sounds/dhd_select2.mp3", audio: null },
      { id: SoundService.OPEN_GATE, url: "assets/sounds/open.mp3", audio: null },
      { id: SoundService.RING_ROTATION, url: "assets/sounds/rotate.mp3", audio: null },
      { id: SoundService.WATER_HORIZON, url: "assets/sounds/water.mp3", audio: null },
      { id: SoundService.WORM_HOLE, url: "assets/sounds/through_the_wormhole.mp3", audio: null }
    ];
  }

  private getSound(p_id: string): HTMLAudioElement {

    let i: number = 0;

    for (; i < this._sounds.length; i++) {
      if (p_id == this._sounds[i].id) {


        if (this._sounds[i].audio == null) {
          this._sounds[i].audio = new Audio(this._sounds[i].url);
        }

        return this._sounds[i].audio as HTMLAudioElement;

      }
    }

    return null;
  }

  public pauseAll():void{
    let i: number = 0;
    let audio:HTMLAudioElement;

    for (; i < this._sounds.length; i++) {
        if (this._sounds[i].audio == null)
          continue;

        audio = this._sounds[i].audio as HTMLAudioElement;
        audio.pause();
    }
  }

  public setVolume( p_id:string, p_volume:number ):void{
    let sound: HTMLAudioElement = this.getSound(p_id);
    if (sound == null)
      return;

    sound.volume = p_volume;
  }

  public pause(p_id: string): void {
    let sound: HTMLAudioElement = this.getSound(p_id);
    if (sound == null)
      return;

    sound.pause();
  }

  public setCurrentTime(p_id: string, p_time: number): void {
    let sound: HTMLAudioElement = this.getSound(p_id);
    if (sound == null)
      return;

    sound.currentTime = p_time;
  }

  public getDuration(p_id: string): number {
    let sound: HTMLAudioElement = this.getSound(p_id);
    if (sound == null)
      return 0;
    

    return sound.duration;
  }

  public play(p_id: string): void {
    let sound: HTMLAudioElement = this.getSound(p_id);
    if (sound == null)
      return;

    sound.play();
  }

}

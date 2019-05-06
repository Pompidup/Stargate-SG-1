import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WaterEffectService } from '../water-effect.service';
import { WaterModelService } from '../water-model.service';
import { RaindropService } from '../raindrop.service';
import { WormHoleService } from '../worm-hole.service';
import { SoundService } from '../sound.service';


@Component({
    selector: 'app-gate',
    templateUrl: './gate.component.html',
    styleUrls: ['./gate.component.css']
})
export class GateComponent implements OnInit, OnDestroy {

    private raindrop: number[][];
    private timeout;

    constructor(
        private router: Router,
        private waterEffect: WaterEffectService,
        private waterModel: WaterModelService,
        private raindropService: RaindropService,
        private wormHole: WormHoleService,
        private soundService: SoundService
    ) { }

    ngOnInit() {
    }

    ngOnDestroy() {
        clearTimeout(this.timeout);
    }

    private doWater(): void {
        let img = new Image();
        img.addEventListener(
            "load",
            () => {

                let canvas = document.querySelector(".water");
                this.raindrop = this.raindropService.getRainDrop(8, 8);

                this.waterModel.reset(512, 512, 4);
                this.waterModel.touchWater(256, 256, 15, this.raindropService.getRainDrop(32, 32));
                this.waterEffect.reset(canvas, img, 256, 30);
                this.render();
            }
        );
        img.src = "./assets/images/stargate.png";
    }

    private render(): void {

        let x: number = 0;
        let y: number = 0;
        let random: number = Math.random();

        if (random > 0.1) {
            x = (this.waterEffect.width >> 2) + (Math.random() * this.waterEffect.width >> 1);
            y = (this.waterEffect.height >> 2) + (Math.random() * this.waterEffect.height >> 1);
            this.waterModel.touchWater(x, y, -Math.random() * 2, this.raindrop);
        }

        this.waterModel.compute();
        this.waterEffect.draw(this.waterModel.getInterpolatedFrame(), this.waterModel.evolving);
        this.timeout = setTimeout(this.render.bind(this), 16);
    }

    public travel(p_address: number[]): void {

        for (let i: number = 0; i < 7; i++) {
            this._spin(i);
        }

        setTimeout(() => this._vortex(), 28000);

    }

    private _vortex(): void {

        this.soundService.play(SoundService.OPEN_GATE);

        setTimeout(
            () => {
                this.doWater();
                this.soundService.play(SoundService.WATER_HORIZON);
                setTimeout(() => { this.soundService.pause(SoundService.WATER_HORIZON); }, 10000);
                this.wormHole.travel("quest", 10000);
            },
            1000
        );
    }

    private _spin(p_num: number): void {

        let ring: any = document.getElementsByClassName("ring")[0];

        setTimeout(
            () => {

                this.soundService.pause(SoundService.RING_ROTATION);
                this.soundService.setCurrentTime(SoundService.RING_ROTATION, 8);
                this.soundService.setVolume(SoundService.RING_ROTATION, 0.5);
                this.soundService.play(SoundService.RING_ROTATION);

                ring.setAttribute("class", "ring rotation" + (p_num + 1));

                setTimeout(
                    () => {
                        let lock: any = document.getElementsByClassName("lock")[p_num];
                        console.log(lock);
                        let base_off: any = lock.getElementsByClassName("base-off")[0];
                        // console.log(base_off);
                        let base_on: any = lock.getElementsByClassName("base-on")[0];
                        let center_off: any = lock.getElementsByClassName("center-off")[0];
                        let center_on: any = lock.getElementsByClassName("center-on")[0];

                        base_off.style.opacity = '0';
                        base_on.style.opacity = '1';
                        center_off.style.opacity = '0';
                        center_on.style.opacity = '1';
                        base_on.style.transform = 'translateY(-10px)';

                    },
                    3500
                )

                setTimeout(
                    () => {

                        this.soundService.pause(SoundService.CHEVRON_LOCKED);
                        this.soundService.setCurrentTime(SoundService.CHEVRON_LOCKED, 0);
                        this.soundService.play(SoundService.CHEVRON_LOCKED);
                    },
                    2000

                )

            },
            p_num * 4000
        );
    }

}
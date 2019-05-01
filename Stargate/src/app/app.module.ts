import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StargateComponent } from './stargate/stargate.component';
import { HightscoreComponent } from './hightscore/hightscore.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestComponent } from './quest/quest.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OnlyquizComponent } from './onlyquiz/onlyquiz.component';
import { NasaService } from './nasa.service';
import { PictureViewerComponent } from './picture-viewer/picture-viewer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { DialComponent } from './dial/dial.component';
import { SGCComponent } from './sgc/sgc.component';
import { GateComponent } from './gate/gate.component';
import { WaterComponent } from './water/water.component';
import { WormHoleComponent } from './worm-hole/worm-hole.component';
import { FinalquizComponent } from './finalquiz/finalquiz.component';
import { WormHole2Component } from './worm-hole2/worm-hole2.component';
import { WormHole3Component } from './worm-hole3/worm-hole3.component';
import { WormHole4Component } from './worm-hole4/worm-hole4.component';
import { WormHole5Component } from './worm-hole5/worm-hole5.component';

@NgModule({
  declarations: [
    AppComponent,
    StargateComponent,
    HightscoreComponent,
    QuizComponent,
    QuestComponent,
    ContactUsComponent,
    OnlyquizComponent,
    PictureViewerComponent,
    SubscribeComponent,
    DialComponent,
    SGCComponent,
    GateComponent,
    WaterComponent,
    WormHoleComponent,
    FinalquizComponent,
    WormHole2Component,
    WormHole3Component,
    WormHole4Component,
    WormHole5Component,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

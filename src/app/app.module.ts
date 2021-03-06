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
import { GateComponent } from './gate/gate.component';
import { WaterComponent } from './water/water.component';
import { FinalquizComponent } from './finalquiz/finalquiz.component';
import { WormholeComponent } from './wormhole/wormhole.component';
import { SGCComponent } from './sgc/sgc.component';

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
    GateComponent,
    WaterComponent,
    FinalquizComponent,
    WormholeComponent,
    SGCComponent
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

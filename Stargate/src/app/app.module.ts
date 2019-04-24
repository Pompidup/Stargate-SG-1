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
import { PictureViewerComponent } from './picture-viewer/picture-viewer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NasaService } from './nasa.service';

@NgModule({
  declarations: [
    AppComponent,
    StargateComponent,
    HightscoreComponent,
    QuizComponent,
    QuestComponent,
    ContactUsComponent,
    PictureViewerComponent,

    SubscribeComponent
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

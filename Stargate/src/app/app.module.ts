import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StargateComponent } from './stargate/stargate.component';
import { HightscoreComponent } from './hightscore/hightscore.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestComponent } from './quest/quest.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
<<<<<<< HEAD
import { PictureViewerComponent } from './picture-viewer/picture-viewer.component';

=======
import { SubscribeComponent } from './subscribe/subscribe.component';
>>>>>>> d03e29c9338b1175240d4a45e24c644252734839

@NgModule({
  declarations: [
    AppComponent,
    StargateComponent,
    HightscoreComponent,
    QuizComponent,
    QuestComponent,
    ContactUsComponent,
<<<<<<< HEAD
    PictureViewerComponent,

=======
    SubscribeComponent
>>>>>>> d03e29c9338b1175240d4a45e24c644252734839
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

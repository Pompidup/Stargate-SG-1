import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestComponent } from './quest/quest.component';
import { QuizComponent } from './quiz/quiz.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StargateComponent } from './stargate/stargate.component';
import { PictureViewerComponent } from './picture-viewer/picture-viewer.component';
import { HightscoreComponent } from './hightscore/hightscore.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { GateComponent } from './gate/gate.component';
import { WormHoleComponent } from './worm-hole/worm-hole.component';
import { WormHole2Component } from './worm-hole2/worm-hole2.component';
import { WormHole3Component } from './worm-hole3/worm-hole3.component';
import { WormHole4Component } from './worm-hole4/worm-hole4.component';
import { WormHole5Component } from './worm-hole5/worm-hole5.component';
import { FinalquizComponent } from './finalquiz/finalquiz.component';



const routes: Routes = [
  { path: 'quest', component: QuestComponent },
  { path: 'quiz', component: QuizComponent },
  {path: 'finalquiz' ,component:FinalquizComponent},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'stargate', component: StargateComponent },
  { path: 'picture-viewer', component: PictureViewerComponent },
  { path: 'hightscore', component: HightscoreComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'gate', component: GateComponent },
  { path: 'worm-hole', component: WormHoleComponent },
  { path: 'worm-hole2', component: WormHole2Component },
  { path: 'worm-hole3', component: WormHole3Component },
  { path: 'worm-hole4', component: WormHole4Component },
  { path: 'worm-hole5', component: WormHole5Component },
  { path: '', redirectTo: 'stargate', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

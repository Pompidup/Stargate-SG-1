import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestComponent } from './quest/quest.component';
import { QuizComponent } from './quiz/quiz.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StargateComponent } from './stargate/stargate.component';

const routes: Routes = [
  { path: 'quest', component: QuestComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'stargate', component: StargateComponent},
  { path: '', redirectTo: 'stargate', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

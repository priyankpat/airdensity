import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailydaComponent } from './dailyda/dailyda.component';
import { CautionComponent } from './caution/caution.component';
import { DevelopersComponent } from './developers/developers.component';


const routes: Routes = [
  {
    path:'', component: DailydaComponent
  },
  {
    path:'dailyda', component:DailydaComponent
  },
  {
    path:'readfirst', component:CautionComponent
  },
  {
    path:'developers', component:DevelopersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailydaComponent } from './dailyda/dailyda.component';
import { CautionComponent } from './caution/caution.component';


const routes: Routes = [
  {
    path:'', component: DailydaComponent
  },
  {
    path:'dailyda', component:DailydaComponent
  },
  {
    path:'readfirst', component:CautionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

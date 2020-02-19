import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CautionComponent } from './caution/caution.component';
import { SharedModule } from './shared/shared.module';
import { DailydaComponent } from './dailyda/dailyda.component';
import { HttpClientModule } from '@angular/common/http';
import { DevelopersComponent } from './developers/developers.component';


@NgModule({
  declarations: [
    AppComponent,
    CautionComponent,
    DailydaComponent,
    DevelopersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

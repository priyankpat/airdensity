import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShellComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ShellComponent,
  ]
})
export class SharedModule { }

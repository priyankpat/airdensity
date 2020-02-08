import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [ShellComponent, NavbarComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ShellComponent,
  ]
})
export class SharedModule { }

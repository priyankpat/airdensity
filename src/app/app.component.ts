import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Skydiver's Density Altitude";
  private apiUrl = 'api.openweathermap.org/data/2.5/weather?q=Chicago&appid=a641de02f55d14465d55e5fd6edb7506'
  // This is for chicago. Format it, save it in a variable to choose different cities.

  constructor() {
    console.log('Hello fellow user');
  }

}

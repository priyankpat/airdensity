import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {
  API_KEY = 'a641de02f55d14465d55e5fd6edb7506';

  constructor(private httpClient: HttpClient) { }

  public getWeather(zipcode){ // getWeather(zipcode)
    return this.httpClient.get(
`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${this.API_KEY}` 
);  // where to format with zip code
  }
}



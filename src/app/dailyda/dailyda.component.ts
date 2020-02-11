import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../services/weatherdata.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-dailyda',
  templateUrl: './dailyda.component.html',
  styleUrls: ['./dailyda.component.scss']
})
export class DailydaComponent implements OnInit {
  weather;
  temp = this.weather.main.temp;
  press = this.weather.main.temp;
  //Crunch your numbers here, store it in a variable called result, etc.,
  //And in the template, {{ result }} will display that number.
  ISAT = 288.15;
  ISAP = 29.92;
  lapse_rate = 0.0065;
  R = 8.3144598;
  g = 9.80665;
  M = 0.028964; // This is the molar mass of DRY air.
  dry_da = this.ISAT/this.temp *(1 - ((this.press/this.ISAP)/(this.temp/this.ISAT)) ** ((this.lapse_rate*this.R)/(this.g*this.M - this.lapse_rate*this.R)))



  constructor(private weatherdataService: WeatherdataService) { }

  ngOnInit() {
    this.weatherdataService.getWeather().subscribe((data)=>{
      console.log(data);
      this.weather = data; //or ['main']??? But no, I think it's right
    }
    )};

};

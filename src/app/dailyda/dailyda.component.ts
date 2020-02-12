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
  temp;
  press;
  dry_da;
  //Crunch your numbers here, store it in a variable called result, etc.,
  //And in the template, {{ result }} will display that number.
  ISAT = 288.15;
  ISAP = 1013.25;
  expon = 0.234978134;
  // lapse_rate = 0.0065;
  // R = 8.3144598; Replaced all this with expon
  // g = 9.80665;
  // M = 0.028964; // This is the molar mass of DRY air.


  constructor(private weatherdataService: WeatherdataService) { }

  ngOnInit() {
    this.weatherdataService.getWeather().subscribe((data)=>{
      console.log(data);
      this.weather = data;
      this.temp = this.weather.main.temp;
      this.press = this.weather.main.pressure;
      console.log(this.ISAT/0.0065 *(1 - ((this.press/this.ISAP)/(this.temp/this.ISAT))** (this.expon)))
      this.dry_da = Math.round(3.28084 * this.ISAT/0.0065 *(1 - ((this.press/this.ISAP)/(this.temp/this.ISAT))** (this.expon)))
    }
    )};

};

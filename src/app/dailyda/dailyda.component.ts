import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../services/weatherdata.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dailyda',
  templateUrl: './dailyda.component.html',
  styleUrls: ['./dailyda.component.scss']
})
export class DailydaComponent implements OnInit {

  zipForm = new FormGroup({
    zipCode:new FormControl(37064) //Default value in quotes
  })
  zipcode = 60610;
  onSubmit() {
    this.zipForm.value.zipCode.setValue(this.zipForm.value.zipCode.value);
    console.log(this.zipcode);
  }
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
    this.weatherdataService.getWeather(this.zipcode).subscribe((data)=>{
       // add zip code to .getWeather call
      this.weather = data;
      this.temp = this.weather.main.temp;
      this.press = this.weather.main.pressure;
      this.dry_da = Math.round(3.28084 * this.ISAT/0.0065 *(1 - ((this.press/this.ISAP)/(this.temp/this.ISAT))** (this.expon)));
    }
    )};

};

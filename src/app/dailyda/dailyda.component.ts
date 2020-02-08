import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../services/weatherdata.service';

@Component({
  selector: 'app-dailyda',
  templateUrl: './dailyda.component.html',
  styleUrls: ['./dailyda.component.scss']
})
export class DailydaComponent implements OnInit {
  weather;

  constructor(private weatherdataService: WeatherdataService) { }

  ngOnInit() {
    this.weatherdataService.getWeather().subscribe((data)=>{
      console.log(data);
      this.weather = data; //or ['main']??? But no, I think it's right
    }
    )};

};

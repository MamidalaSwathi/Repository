import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-detailed-weather-component',
  templateUrl: './detailed-weather-component.component.html',
  styleUrls: ['./detailed-weather-component.component.css']
})
export class DetailedWeatherComponentComponent implements OnInit {
  public lat;
  public lon;
  public weatherData: any;
  public fiveDaysData: any;

  constructor(private route: ActivatedRoute, private weatherService: WeatherServiceService) {
    this.route.queryParams.subscribe(params => {
      this.lat = params["lat"];
      this.lon = params["lon"];
  });
   }

  ngOnInit() {
    this.weatherService.getDailyWeather(this.lat, this.lon).subscribe(data=>{
      this.weatherData = data;
      this.fiveDaysData = this.weatherData.daily.slice(0,5);
    })
  }

}

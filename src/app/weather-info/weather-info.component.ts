import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router, RouterLink } from '@angular/router';
import { Observable, merge } from 'rxjs';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
public cities = [{
  city: 'Barcelona',
  temp: 291.87,
  sunrise: '6:55 AM',
  sunset: '8:43 PM',
  lon: 124.141899,
  lat: 12.8683
},
{
  city: 'Helsinki',
  temp: 277.14,
  sunrise: '5:31 AM',
  sunset: '9:04 PM',
  lon: 24.93545,
  lat: 60.16952
},
{
  city: 'Florence',
  temp: 294.24,
  sunrise: '6:14 AM',
  sunset: '8:11 PM',
  lon: -90.131203,
  lat: 32.153481
},
{
  city: 'Prague',
  temp: 283.87,
  sunrise: '5:47 AM',
  sunset: '8:12 PM',
  lon: -96.68502,
  lat: 35.48674
},
{
  city: 'Paris',
  temp: 289.94,
  sunrise: '6:39 AM',
  sunset: '8:57 PM',
  lon: -88.326714,
  lat: 36.301998
}]

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  getCityDetails(city){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "lat":city.lat,
          "lon": city.lon
      }
  };
    this.router.navigate(['details'], navigationExtras);
  }
}

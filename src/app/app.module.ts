import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { HttpClientModule } from "@angular/common/http";
import { DetailedWeatherComponentComponent } from './detailed-weather-component/detailed-weather-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
    DetailedWeatherComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: 
  [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

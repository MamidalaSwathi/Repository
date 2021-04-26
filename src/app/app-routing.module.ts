import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedWeatherComponentComponent } from './detailed-weather-component/detailed-weather-component.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';


export const routes: Routes = [
  { path: '', component: WeatherInfoComponent },
  {path: 'details', component: DetailedWeatherComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

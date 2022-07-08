import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './componets/city/city.component';
import { MeteoForecastComponent } from './componets/meteo-forecast/meteo-forecast.component';

const routes: Routes = [
  {path: 'search', component: CityComponent},
  {path: 'meteo/:latlng', component: MeteoForecastComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: '**', redirectTo: '/search'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

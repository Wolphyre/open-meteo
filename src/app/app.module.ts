import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoForecastComponent } from './componets/meteo-forecast/meteo-forecast.component';
import { CodeIconPipe } from './pipes/code-icon/code-icon.pipe';
import { UnitValuePipe } from './pipes/unit-value/unit-value.pipe';
import { CityComponent } from './componets/city/city.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    MeteoForecastComponent,
    CodeIconPipe,
    UnitValuePipe,
    CityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

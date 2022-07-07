import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoForecastComponent } from './componets/meteo-forecast/meteo-forecast.component';
import { CodeIconPipe } from './pipes/code-icon/code-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MeteoForecastComponent,
    CodeIconPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

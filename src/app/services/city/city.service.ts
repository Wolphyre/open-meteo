import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CityDatas } from 'src/app/componets/meteo-forecast/model/city-datas';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private readonly BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search?name='

  constructor(private http: HttpClient) { }

  getDatas(city: string) {
    const url = this.BASE_URL + city;
    return this.http.get<any>(url).pipe(
      map((data: any) => {
        return data.results;
      })
    );
  }


 }
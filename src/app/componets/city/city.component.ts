import { Component, OnInit } from '@angular/core';
import { CityDatas } from 'src/app/componets/meteo-forecast/model/city-datas';
import { CityService } from 'src/app/services/city/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  public searchString: string = '';
  public citiesArray: CityDatas[] = []

  constructor(public cityServ:CityService) { }

  ngOnInit(): void {


  }

  getCity(){
    this.cityServ.getDatas(this.searchString).subscribe({
      next: (data) => this.citiesArray = data,
      error: (err) => console.log(err) 
    })
  }



  }



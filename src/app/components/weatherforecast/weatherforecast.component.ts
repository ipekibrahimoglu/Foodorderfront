import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';//bu sayade backenden veri çekebiliriz çekebiliriz.
import { WeatherForecastResponseModel } from '../../models/weatherForecastResponseModel';
import { WeatherForecast } from '../../models/weatherForecast';

@Component({
  selector: 'app-weatherforecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./weatherforecast.component.html',
  styleUrl: './weatherforecast.component.css'
})
export class WeatherForecastComponent implements OnInit{
    weatherForecasts:WeatherForecast[]=[];
  apiUrl='https://localhost:44302/WeatherForecast';

  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getWeatherForecasts();
  }

  getWeatherForecasts(){
    this.httpClient
    .get<WeatherForecastResponseModel>(this.apiUrl).
    subscribe((response)=>{
      this.weatherForecasts=response.data
    });
    
    
      //httpclient get işlemini this.apiurl adresini ile yap dönen sonucu WeatherForecastResponseModel u tipe maple 
    //ve abone ol. yanıt response ile eşleşiyor
    
  }
}

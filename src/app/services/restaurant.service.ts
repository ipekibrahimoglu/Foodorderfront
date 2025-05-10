import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
   apiUrl='https://localhost:7292/api/Restaurants';

  constructor(private httpClient:HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(this.apiUrl); 
  }
  

}
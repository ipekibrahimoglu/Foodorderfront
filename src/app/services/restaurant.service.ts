import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantResponseModel } from '../models/restaurantResponseModel';
import { Restaurant } from '../models/Menu/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
   apiUrl='http://localhost:5161/api/Restaurants';

  constructor(private httpClient:HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(this.apiUrl); // ✅ artık Restaurant[] dönecek
  }
  

}

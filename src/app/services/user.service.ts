import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../models/userResponseModel';
import { User } from '../models/user';
import { ProductResponseModel } from '../models/productResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5161/api/Users';

  constructor(private httpClient: HttpClient) {}

  getUser():Observable<UserResponseModel>{
    return this.httpClient.get<UserResponseModel>(this.apiUrl);
  }
}
 
//userService eklendi 
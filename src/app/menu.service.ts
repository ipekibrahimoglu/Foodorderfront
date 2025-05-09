import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './models/Menu/menu';
import { Observable } from 'rxjs';
import { ListeResponsemodel } from './models/listeResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
 
 apiUrl: string = 'http://localhost:5161/api/Menus';

  constructor(private httpclient: HttpClient) { }

  //Tüm Menüler
getMenus(): Observable<ListeResponsemodel<Menu>> {
  return this.httpclient.get<ListeResponsemodel<Menu>>(`${this.apiUrl}`); // subscribe olmak isteyen componenttir
 //Observable yani subscribe olunabilir bir menuresponsemodel döndürecek 
}

// 2. Menü Ekleme (POST)
addMenu(newMenu: Menu):Observable<ListeResponsemodel<Menu>> {
 return  this.httpclient.post<ListeResponsemodel<Menu>>(`${this.apiUrl}`, newMenu);
}

// 3. Menü Güncelleme (PUT)
updateMenu(updatedMenu: Menu):Observable<ListeResponsemodel<Menu>> {
  return this.httpclient.put<ListeResponsemodel<Menu>>(`${this.apiUrl}`, updatedMenu);
}

// 4. Menü ID ile Getirme (GET /{id})
getMenuById(id: string):Observable<ListeResponsemodel<Menu>> {
  return this.httpclient.get<ListeResponsemodel<Menu>>(`${this.apiUrl}/${id}`);
}

// 5. Menü Silme (DELETE /{id})
deleteMenu(id: string):Observable<ListeResponsemodel<Menu>> {
  return this.httpclient.delete<ListeResponsemodel<Menu>>(`${this.apiUrl}/${id}`);
}

// 6. Restorana göre menüleri getir (GET /byrestaurant/{restaurantId})
getMenusByRestaurant(restaurantId: string):Observable<ListeResponsemodel<Menu>> {
  return this.httpclient.get<ListeResponsemodel<Menu>>(`${this.apiUrl}/byrestaurant/${restaurantId}`);
}

// 7. Menü arama (GET /search?name=x&restaurantId=y)
searchMenus(name?: string, restaurantId?: string): Observable<ListeResponsemodel<Menu>> {
  const queryParams = [];
  if (name) queryParams.push(`name=${encodeURIComponent(name)}`);
  if (restaurantId) queryParams.push(`restaurantId=${encodeURIComponent(restaurantId)}`);
  const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

  return this.httpclient.get<ListeResponsemodel<Menu>>(`${this.apiUrl}/search${queryString}`);
}
}
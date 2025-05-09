// src/app/services/menu-item.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItems } from './models/Menu/menuItems';
import { Observable } from 'rxjs';
import { ListeResponsemodel } from './models/listeResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private apiUrl = 'http://localhost:5161/api/MenuItems';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<ListeResponsemodel<MenuItems>> {
    return this.http.get<ListeResponsemodel<MenuItems>>(`${this.apiUrl}`);
  }

  getMenuItemById(id: string): Observable<ListeResponsemodel<MenuItems>> {
    return this.http.get<ListeResponsemodel<MenuItems>>(`${this.apiUrl}/${id}`);
  }

  addMenuItem(item: MenuItems): Observable<ListeResponsemodel<MenuItems>> {
    return this.http.post<ListeResponsemodel<MenuItems>>(`${this.apiUrl}`, item);
  }

  updateMenuItem(item: MenuItems): Observable<ListeResponsemodel<MenuItems>> {
    return this.http.put<ListeResponsemodel<MenuItems>>(`${this.apiUrl}`, item);
  }

  deleteMenuItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getMenuItemsByMenu(menuId: string): Observable<ListeResponsemodel<MenuItems>> {
    return this.http.get<ListeResponsemodel<MenuItems>>(`${this.apiUrl}/bymenu/${menuId}`);
  }

  searchMenuItems(
    name?: string,
    menuId?: string,
    min?: number,
    max?: number
  ): Observable<ListeResponsemodel<MenuItems>> {
    const params: string[] = [];
    if (name)    params.push(`name=${encodeURIComponent(name)}`);
    if (menuId)  params.push(`menuId=${encodeURIComponent(menuId)}`);
    if (min != null) params.push(`min=${min}`);
    if (max != null) params.push(`max=${max}`);
    const query = params.length ? `?${params.join('&')}` : '';
    return this.http.get<ListeResponsemodel<MenuItems>>(`${this.apiUrl}/search${query}`);
  }
}

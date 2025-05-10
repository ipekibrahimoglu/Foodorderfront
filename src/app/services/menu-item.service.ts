// src/app/services/menu-item.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { MenuItems } from '../models/Menu/menuItems';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private apiUrl = 'https://localhost:7292/api/MenuItems';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<ListResponseModel<MenuItems>> {
    return this.http.get<ListResponseModel<MenuItems>>(`${this.apiUrl}`);
  }

  getMenuItemById(id: string): Observable<ListResponseModel<MenuItems>> {
    return this.http.get<ListResponseModel<MenuItems>>(`${this.apiUrl}/${id}`);
  }

  addMenuItem(item: MenuItems): Observable<ListResponseModel<MenuItems>> {
    return this.http.post<ListResponseModel<MenuItems>>(`${this.apiUrl}`, item);
  }

  updateMenuItem(item: MenuItems): Observable<ListResponseModel<MenuItems>> {
    return this.http.put<ListResponseModel<MenuItems>>(`${this.apiUrl}`, item);
  }

  deleteMenuItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getMenuItemsByMenu(menuId: string): Observable<ListResponseModel<MenuItems>> {
    return this.http.get<ListResponseModel<MenuItems>>(`${this.apiUrl}/bymenu/${menuId}`);
  }

  searchMenuItems(
    name?: string,
    menuId?: string,
    min?: number,
    max?: number
  ): Observable<ListResponseModel<MenuItems>> {
    const params: string[] = [];
    if (name)    params.push(`name=${encodeURIComponent(name)}`);
    if (menuId)  params.push(`menuId=${encodeURIComponent(menuId)}`);
    if (min != null) params.push(`min=${min}`);
    if (max != null) params.push(`max=${max}`);
    const query = params.length ? `?${params.join('&')}` : '';
    return this.http.get<ListResponseModel<MenuItems>>(`${this.apiUrl}/search${query}`);
  }
}

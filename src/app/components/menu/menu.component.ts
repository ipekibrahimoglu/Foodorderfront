import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../models/Menu/menu';



@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
 
  menus: Menu[] = [];
  apiUrl: string =  'https://localhost:7292/api/Menus';
  // menuResponseModel: ListResponseModel<Menu>{
  //   data: this.menus,
  //   message: "",
  //   success: true,
  // };

  constructor(private httpclient: HttpClient) {
    this.httpclient.get // Bağımlılık burada inject edilir, constructor çalıştığında henüz ngOnInit çalışmamıştır.
      

  }

  ngOnInit(): void {
    console.log("ngOnInit çalıştı");
    this.getMenus(); // örnek API çağrısı
    
  }


 // 1. Tüm Menüler
getMenus() {
  this.httpclient.get<Menu[]>(`${this.apiUrl}`).subscribe({ // subscribe olmak isteyen ap
    next: res => {
      this.menus = res;
      console.log("Tüm menüler:", res);
    },
    error: err => console.error("Menü çekme hatası:", err)
  });
}

// 2. Menü Ekleme (POST)
addMenu(newMenu: Menu) {
  this.httpclient.post<Menu>(`${this.apiUrl}`, newMenu).subscribe({
    next: res => console.log("Menü eklendi:", res),
    error: err => console.error("Menü ekleme hatası:", err)
  });
}

// 3. Menü Güncelleme (PUT)
updateMenu(updatedMenu: Menu) {
  this.httpclient.put<Menu>(`${this.apiUrl}`, updatedMenu).subscribe({
    next: res => console.log("Menü güncellendi:", res),
    error: err => console.error("Menü güncelleme hatası:", err)
  });
}

// 4. Menü ID ile Getirme (GET /{id})
getMenuById(id: string) {
  this.httpclient.get<Menu>(`${this.apiUrl}/${id}`).subscribe({
    next: res => console.log("Menü bulundu:", res),
    error: err => console.error("Menü ID ile çekme hatası:", err)
  });
}

// 5. Menü Silme (DELETE /{id})
deleteMenu(id: string) {
  this.httpclient.delete(`${this.apiUrl}/${id}`).subscribe({
    next: () => console.log("Menü silindi"),
    error: err => console.error("Menü silme hatası:", err)
  });
}

// 6. Restorana göre menüleri getir (GET /byrestaurant/{restaurantId})
getMenusByRestaurant(restaurantId: string) {
  this.httpclient.get<Menu[]>(`${this.apiUrl}/byrestaurant/${restaurantId}`).subscribe({
    next: res => {
      this.menus = res;
      console.log("Restorana ait menüler:", res);
    },
    error: err => console.error("Restoran menüleri çekme hatası:", err)
  });
}

// 7. Menü arama (GET /search?name=x&restaurantId=y)
searchMenus(name?: string, restaurantId?: string) {
  const queryParams = [];
  if (name) queryParams.push(`name=${encodeURIComponent(name)}`);
  if (restaurantId) queryParams.push(`restaurantId=${restaurantId}`);
  const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

  this.httpclient.get<Menu[]>(`${this.apiUrl}/search${queryString}`).subscribe({
    next: res => {
      this.menus = res;
      console.log("Arama sonucu:", res);
    },
    error: err => console.error("Menü arama hatası:", err)
  });
}

  
  
}


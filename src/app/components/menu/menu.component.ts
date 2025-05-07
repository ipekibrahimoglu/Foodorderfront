import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from '../../models/Menu/menu';
import { MenuResponseModel } from '../../models/Menu/menuResponseModel';
import { MenuService } from '../../menu.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CommonModule,FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [];
  menusLoaded: boolean = false;
  menuByIdLoaded: boolean = false;
  menusByRestaurantLoaded: boolean = false;
  searchMenusLoaded: boolean = false;

  menuResponseModel: MenuResponseModel = {
    data: this.menus,
    message: "",
    success: true,
  };

  constructor(private menuService:MenuService ) {
    // Bağımlılık burada inject edilir, constructor çalıştığında henüz ngOnInit çalışmamıştır.

  }

  ngOnInit(): void {
    this.getMenus();
  
  }
  

 // 1. Tüm Menüler
 getMenus() {
  this.menuService.getMenus().subscribe({
    next: (response) => {
      console.log("Gelen menüler:", response); // Test için
      this.menus = response.data;
      this.menusLoaded = true;}
  })
    
  }
 }

// // // 2. Menü Ekleme (POST)
// // addMenu(newMenu: Menu) { // eklenecek menu olacak mı olacaksa nerede
// //   this.menuService.addMenu().subscribe()
// // }

// // // 3. Menü Güncelleme (PUT)// update de aynı şekilde
// // updateMenu(updatedMenu: Menu) {
// //   this.menuService.updateMenu().subscribe
// // }

// // 4. Menü ID ile Getirme (GET /{id})
// getMenuById(id: string) {
//   this.menuService.getMenuById(id).subscribe({
//     next: response => {
//       this.menus = response.data;
//       this.menuByIdLoaded = true;
//     },
//     error: err => {
//       console.error("getMenuById hatası:", err);

//     }
//   });
// }

// // // 5. Menü Silme (DELETE /{id})// menu silme gerekli mi şu an
// // deleteMenu(id: string) {
// //   this.menuService.deleteMenu().subscribe()
// // }
//  // Restorana göre menüleri getir (GET /byrestaurant/{restaurantId})
//  getMenusByRestaurant(restaurantId: string) {
//    this.menuService.getMenusByRestaurant("Yeni Lezzet Restorani").subscribe({
//      next: response => {
//        this.menus = response.data;
//        this.menusByRestaurantLoaded = true;
//      },
//     error: err => {
//        console.error("getMenusByRestaurant hatası:", err);
//        this.menusByRestaurantLoaded = true;
//     }
//    });
//  }

// // 7. Menü arama (GET /search?name=x&restaurantId=y)
// searchMenus(name?: string, restaurantId?: string) {
// this.menuService.searchMenus("Ana Yemekler", "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa").subscribe({
//   next: (response: { data: any; }) => {
//     this.menus = response.data;
//     this.searchMenusLoaded = true;
//   },
//   error: err => {
//     console.error("searchMenus hatası:", err);
//     this.searchMenusLoaded = true;
//   }
// });
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from '../../models/Menu/menu';
import { MenuService } from '../../menu.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
userRole: any;

  menus: Menu[] = [];
  currentMenu: Menu | null = null;

  menusLoaded: boolean = false;
  menuByIdLoaded: boolean = false;
  menusByRestaurantLoaded: boolean = false;
  searchMenusLoaded: boolean = false;

  constructor(private menuService: MenuService) {
    // Bağımlılık burada inject edilir, constructor çalıştığında henüz ngOnInit çalışmamıştır.
  }

  ngOnInit(): void {
    this.getMenus();
    //this.getMenuById("5d2dd6db-5618-f011-91fb-2c98111a44ca");
    //this.addMenu(); parametre gerekli
    // this.updateMenu();
    // this.addMenu();
    //this.searchMenus();
    //this.deleteMenu();
    //this.getMenusByRestaurant();
  }

  // 1. Tüm Menüler
  // menu.component.ts
  getMenus() {
    this.menuService.getMenus().subscribe({
      next: (response: any) => {
        console.log('Full response:', response);
        console.log('Keys:', Object.keys(response));
        console.log('response.data:', response.data);
        console.log('response.Data:', response.Data);
        console.log('is array:', Array.isArray(response));

        this.menus = response;
        this.menusLoaded = true;
      },
      error: (err) => {
        console.error('getMenus error:', err);
        this.menusLoaded = true;
      },
    });
  }

  setCurrentMenus(menu: Menu) {
    this.currentMenu = menu;
    console.log('seçilen menü :', this.currentMenu);
  }

   setCurrentMenu(menu: Menu): void {
    if (this.currentMenu?.menuId === menu.menuId) {
      this.currentMenu = null;
    } else {
      this.currentMenu = menu;
    }
  }


  // // // 2. Menü Ekleme (POST)
  //addMenu(newMenu: Menu) { // eklenecek menu olacak mı olacaksa nerede, şu an çalışmıyor ama parametre konarsa
  //çalışır
  //this.menuService.addMenu().subscribe()
  //}
  // // }

  // // // 3. Menü Güncelleme (PUT)// update de aynı şekilde
  //updateMenu(updatedMenu: Menu) {  menü update i istenirse
  // //   this.menuService.updateMenu().subscribe
  // // }

  // // 4. Menü ID ile Getirme (GET /{id})
  //  getMenuById(id: string) {
  //    this.menuService.getMenuById(id).subscribe({
  //      next: (response: any) => {
  //        this.menus = response;
  //        this.menuByIdLoaded = true;
  //     },
  //      error: err => {
  //       console.error("getMenuById hatası:", err);
  //       this.menuByIdLoaded= true;

  //     }
  //   });
  //  }

  // deleteMenu(id: string) {
  //    this.menuService.deleteMenu(id).subscribe();
   }

  //}
  //  // Restorana göre menüleri getir (GET /byrestaurant/{restaurantId})
  //  getMenusByRestaurant(restaurantId: string) {
  //    this.menuService.getMenusByRestaurant("Yeni Lezzet Restorani").subscribe({
  //      next: response => {
  //        this.menus = response;
  //         this.menusByRestaurantLoaded = true;
  //       },
  //      error: err => {
  //         console.error("getMenusByRestaurant hatası:", err);
  //         this.menusByRestaurantLoaded = true;
  //      }
  //    });
  //   }

  // // 7. Menü arama (GET /search?name=x&restaurantId=y)
  // searchMenus(name?: string, restaurantId?: string) {
  // this.menuService.searchMenus("Ana Yemekler", "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa").subscribe({
  //   next: (response: { data: any; }) => {
  //     this.menus = response;
  //     this.searchMenusLoaded = true;
  //   },
  //   error: err => {
  //     console.error("searchMenus hatası:", err);
  //     this.searchMenusLoaded = true;
  //   }
  // });
  // }

 

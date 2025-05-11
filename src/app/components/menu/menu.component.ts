import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Menu } from '../../models/Menu/menu';
import { MenuItems } from '../../models/Menu/menuItems';
import { CartService } from '../../services/cart.service';
import { ReviewComponent } from "../review/review.component";
import { RestaurantComponent } from "../restaurant/restaurant.component";
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CommonModule, FormsModule, ReviewComponent, RestaurantComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [];
  currentMenu: Menu | null = null;
  successMessage = '';
  menusLoaded = false;
   currentItem: MenuItems | null = null;

  constructor(
    private menuService: MenuService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus().subscribe({
      next: (response: any) => {
        this.menus = response;
        this.menusLoaded = true;
      },
      error: (err) => {
        console.error('getMenus error:', err);
        this.menusLoaded = true;
      },
    });
  }
isPaymentPage(): boolean {
  return this.router.url.includes('payment'); // veya `includes('/payments')`
}

  setCurrentMenu(menu: Menu): void {
    this.currentMenu =
      this.currentMenu?.menuId === menu.menuId ? null : menu;
    this.successMessage = '';
  }

  addToCart(item: MenuItems): void {
    console.log('addToCart çağrıldı, item:', item);

    // Sepete ekleme
    this.cartService.addTocart(item);

    // Başarı mesajı
    this.successMessage = `${item.name} sepete eklendi!`;
    setTimeout(() => (this.successMessage = ''), 3000);
  }

  // Eğer ürünü bulamazsan, doğrudan bu metodu çağırabilirsin
  notifyNoItem(): void {
    this.successMessage = 'Sepete ekleyecek ürün bulunamadı.';
    if (this.currentMenu) this.notifyMe(this.currentMenu);
    setTimeout(() => (this.successMessage = ''), 3000);
  }

  notifyMe(menu: Menu): void {
    alert(`${menu.name} menüsüne yeni ürün eklendiğinde haber verilecektir.`);
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

  // // // 5. Menü Silme (DELETE /{id})// menu silme gerekli değil şu ann
  //deleteMenu(id: string) {}
  // //   this.menuService.deleteMenu().subscribe()
  // // }
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

 

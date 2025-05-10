import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Menu } from '../../models/Menu/menu';
import { MenuService } from '../../menu.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-menu-add',
  imports: [CommonModule, FormsModule],
  providers: [MenuService],
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css'],
})
export class MenuAddComponent {
  newMenu: Menu = {
    menuId: '',
    name: '',
    description: '',
    restaurantId: '',
    restaurant: {
      restaurantId: '',
      name: '',
      description: '',
      address: '',
      phoneNumber: '',
      ownerId: '',
    },
    menuItems: [],
  };

  constructor(private menuService: MenuService, private router: Router) {}

 
 addMenu(): void {
  // Form validasyonu
  if (!this.newMenu.name.trim() || !this.newMenu.restaurantId.trim()) {
    alert("Menü adı ve restoran ID zorunludur.");
    return;
  }

  const menuToSend: any = {
    menuId: crypto.randomUUID(),   //GUID 
  name: this.newMenu.name.trim(),
  description: this.newMenu.description.trim(),
  restaurantId: this.newMenu.restaurantId.trim(),
  menuItems: []
    
  };

  console.log("Gönderilen veri:", menuToSend);

  this.menuService.addMenu(menuToSend).subscribe({
    next: () => {
      alert('Menü başarıyla eklendi.');
      this.router.navigate(['/menus']);
    },
    error: (err) => {
      console.error('Ekleme hatası:', err);
      alert('Bir hata oluştu.');
    }
  });
}

 
}

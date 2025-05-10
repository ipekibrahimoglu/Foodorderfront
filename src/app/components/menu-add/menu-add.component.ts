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
  styleUrls: ['./menu-add.component.css']
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
      ownerId: ''
    },
    menuItems: []
  };

  constructor(private menuService: MenuService, private router: Router) {}

  addMenu(): void {
    this.menuService.addMenu(this.newMenu).subscribe({
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

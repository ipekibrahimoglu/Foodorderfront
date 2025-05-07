// src/app/components/menu-item/menu-item.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItems } from '../../models/Menu/menuItems';
import { MenuItemService } from '../../menuitem.service';

@Component({
  standalone: true,
  selector: 'app-menuitem',
  imports: [CommonModule, FormsModule],
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})

export class MenuItemComponent implements OnInit {
  
  menuItems: MenuItems[] = [];

  menuItemsLoaded = false;
  menuItemByIdLoaded = false;
  menuItemsByMenuLoaded = false;
  searchMenuItemsLoaded = false;
  menuItemsDeleted = false;
  menuItemsAdded = false;

  constructor(private menuItemService: MenuItemService) {}

  ngOnInit(): void {
    this.getMenuItems();
    //  test 
    // this.getMenuItemById('12ca0fd8-2f1d-f011-91fd-2c98111a44ca');
    // this.addMenuItem({ /* MenuItems objesi */ });
    // this.updateMenuItem({ /* Güncellenmiş objesi */ });
    // this.deleteMenuItem('44444444-4444-4444-4444-444444444444');
    // this.getMenuItemsByMenu('44afdf60-2f1d-f011-91fd-2c98111a44ca');
    // this.searchMenuItems('Adana', '33333333-3333-3333-3333-333333333333', 50, 100);
  }

  getMenuItems(): void {
    this.menuItemService.getMenuItems().subscribe({
      next: (response : any) => {
        this.menuItems = response;
        this.menuItemsLoaded = true;
      },
      error: (err: any) => {
        console.error('getMenuItems error:', err);
        this.menuItemsLoaded = true;
      }
    });
  }

  getMenuItemById(id: string): void {
    this.menuItemService.getMenuItemById(id).subscribe({
      next: (response: any) => {
        this.menuItems = [response];
        this.menuItemByIdLoaded = true;
      },
      error: (err: any) => {
        console.error('getMenuItemById error:', err);
        this.menuItemByIdLoaded = true;
      }
    });
  }

  addMenuItem(newItem: MenuItems): void {
    this.menuItemService.addMenuItem(newItem).subscribe({
      next: (response: any) => {
        console.log('Eklendi:', response);
        this.getMenuItems();
      },
      error: (err: any) => console.error('addMenuItem error:', err)
    });
  }

  updateMenuItem(updated: MenuItems): void {
    this.menuItemService.updateMenuItem(updated).subscribe({
      next: (response: any) => {
        console.log('Güncellendi:', response);
        this.getMenuItems();
      },
      error: (err: any) => console.error('updateMenuItem error:', err)
    });
  }

  deleteMenuItem(id: string): void {
    this.menuItemService.deleteMenuItem(id).subscribe({
      next: (response:any) => {
        console.log('Silindi:', response);
        this.getMenuItems();
      },
      error: (err: any) => console.error('deleteMenuItem error:', err)
    });
  }

  getMenuItemsByMenu(menuId: string): void {
    this.menuItemService.getMenuItemsByMenu(menuId).subscribe({
      next: (response : any) => {
        this.menuItems = response;
        this.menuItemsByMenuLoaded = true;
      },
      error: (err: any) => {
        console.error('getMenuItemsByMenu error:', err);
        this.menuItemsByMenuLoaded = true;
      }
    });
  }

  searchMenuItems(
    name?: string,
    menuId?: string,
    min?: number,
    max?: number
  ): void {
    this.menuItemService.searchMenuItems(name, menuId, min, max).subscribe({
      next: (response: any) => {
        this.menuItems = response;
        this.searchMenuItemsLoaded = true;
      },
      error: (err: any) => {
        console.error('searchMenuItems error:', err);
        this.searchMenuItemsLoaded = true;
      }
    });
  }
}

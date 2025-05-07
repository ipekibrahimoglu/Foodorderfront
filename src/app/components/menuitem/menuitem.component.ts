import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Eğer ngIf, ngFor vs kullanacaksan

@Component({
  standalone: true, // ✅ Standalone olduğu belirtiliyor
  selector: 'app-menuitem',
  imports: [CommonModule], // ✅ Gerekirse buraya diğer modüller de eklenir
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css'] // ✅ styleUrl değil styleUrls
})
export class MenuItemComponent implements OnInit{


  
  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

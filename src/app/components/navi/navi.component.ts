import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule ,
    FormsModule
  ],
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent {
  showDropdown = false;
  searchTerm: string = '';
  onSearch(event: Event): void {
    event.preventDefault(); 
    console.log('Arama yapıldı:', this.searchTerm);
  }
}


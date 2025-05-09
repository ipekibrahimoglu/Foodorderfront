import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-navi',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {
  constructor(private router:Router){}
  goToLogin(){
    this.router.navigate(['/login']);
  }
  showDropdown = false;
  searchTerm: string = '';
  onSearch(event: Event): void {
    event.preventDefault(); 
    console.log('Arama yapıldı:', this.searchTerm);
  }
}

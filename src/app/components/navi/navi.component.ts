import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone:true,
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


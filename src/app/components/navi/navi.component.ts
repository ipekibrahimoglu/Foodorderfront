import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router'; 



import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule ,
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  showDropdown = false;
  searchTerm: string = '';
  userRole: string | null = null;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        if (user?.role) {
          this.userRole = user.role;
        } else {
          this.userRole = null;
        }
      } catch (e) {
        this.userRole = null;
      }
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onSearch(event: Event): void {
    event.preventDefault();
    console.log('Arama yapıldı:', this.searchTerm);
  }

  logout() {
    localStorage.removeItem('user');
    this.userRole = null;
    this.router.navigate(['/menus']).then(() => {
      window.location.reload();
    });
  }

  scrollToMenuForm(): void {
    const formElement = document.getElementById('menuFormSection');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}








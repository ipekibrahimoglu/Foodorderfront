import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: '',
    remember: false,
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
   const savedUser = localStorage.getItem('user');
   if (savedUser) {
       const user = JSON.parse(savedUser);

       if (user.role === 'RestaurantOwner') {
         this.router.navigate(['/restoran-panel']);
       } else if (user.role === 'Customer') {
         this.router.navigate(['/menus']);
      }
     }
   }

  onSubmit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      const user = users.find((u) => u.email === this.loginData.email);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));

        if (user.role === 'RestaurantOwner') {
          this.router.navigate(['/restoran-panel']);
        } else if (user.role === 'Customer') {
          this.router.navigate(['/menu']);
        } else {
          alert('Tanımsız kullanıcı rolü!');
        }
      } else {
        alert('E-posta bulunamadı!');
      }
    });
  }}


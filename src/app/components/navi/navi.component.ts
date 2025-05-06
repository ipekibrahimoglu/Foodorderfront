import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 GEREKLİ İMPORT

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule // 👈 EKLENDİ
  ],
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent {
  showDropdown = false;
}


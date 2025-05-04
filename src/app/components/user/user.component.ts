import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
//onInit ngOnInit metodunun çalıştırılması içindir.


  ngOnInit(): void {//bileşen doma yerleşmeden önce çağırılır.
    throw new Error('Method not implemented.');
  }


}

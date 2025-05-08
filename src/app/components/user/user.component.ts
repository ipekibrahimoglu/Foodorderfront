import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

user:User[]=[];
dataLoaded = false;

//onInit ngOnInit metodunun çalıştırılması içindir.
  constructor(private userService:UserService){

  }


  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getUser().subscribe(response=>{
      this.user=response.data
      this.dataLoaded=true;
    })
    console.log();
  }


}

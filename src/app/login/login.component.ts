import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginImage:string="assets/1.png";
   loginuserdata={};
  constructor(private userService:UsersService) { 

  }

  ngOnInit() {
    
  }
  loginUser(){
  this.userService.loginUser(this.loginuserdata)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  )
  }
}


import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { User } from '../service/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService:UsersService) { }
  user:User;
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?:NgForm)
  { if(form!=null)
    form.reset();
    this.user = {
      userName:'',
      FirstName:'',
      LastName:'',
      Email:'',
      password:'',
      phone:''
    }
  }
  onSubmit(form:NgForm){
  this.userService.registerUser(form.value)
  .subscribe((data:any)=>{
  if(data.Succeeded == true)
  {
    this.resetForm(form);
  }
})
  }
  
}

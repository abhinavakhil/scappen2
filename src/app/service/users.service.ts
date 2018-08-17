import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  loginUser(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  private _registerUrl ="https://popular-newt-9.localtunnel.me/";
  

  constructor(private http:HttpClient) { }
  
  registerUser(user:User){
    const body :User ={
      userName:user.userName,
      FirstName:user.FirstName,
      LastName:user.LastName,
      Email:user.Email,
      password:user.password,
      phone:user.phone
    }
    return this.http.post(this._registerUrl+'/api/user',body);//checkonce//
  }
   
 getloginUser(user:User)
  {
    return this.http.post(this._registerUrl+'/login',user)
    .pipe(map(data => data));
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersService } from './service/users.service';
import { GroupComponent } from './group/group.component';

const routes:Routes = [
  {path:'', redirectTo:'profile', pathMatch:'full'},
  {path:'profile',component:ProfileComponent},
 {path:'login' ,component:LoginComponent },
 {path:'signup',component:SignupComponent},
 {path:'**',redirectTo:'profile'},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    GroupComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule 
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

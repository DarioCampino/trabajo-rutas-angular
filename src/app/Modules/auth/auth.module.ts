import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ValidatonsComponent } from './validatons/validatons.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    ValidatonsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

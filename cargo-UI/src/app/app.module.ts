import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserConsoleComponent } from './user-console/user-console.component';
import { CargoSignUpComponent } from './feature-comp/cargo-sign-up/cargo-sign-up.component';
import { CarSignUpComponent } from './feature-comp/car-sign-up/car-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    UserConsoleComponent,
    CargoSignUpComponent,
    CarSignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

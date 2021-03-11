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
import { FindPasswordComponent } from './find-password/find-password.component';
import { AllBidableCargoComponent } from './all-bidable-cargo/all-bidable-cargo.component';
import { PlaceBidComponent } from './place-bid/place-bid.component';
import { AllBiddedTaskComponent } from './all-bidded-task/all-bidded-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { MoneyListCarComponent } from './money-list-car/money-list-car.component';
import { SumMoneyCarComponent } from './sum-money-car/sum-money-car.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MyCarComponent } from './my-car/my-car.component';
import { CarPriceComponent } from './car-price/car-price.component';
import { NewCargoComponent } from './new-cargo/new-cargo.component';
import { AllCargoComponent } from './all-cargo/all-cargo.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { MoneyListComponent } from './money-list/money-list.component';
import { SumMoneyComponent } from './sum-money/sum-money.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
// import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    UserConsoleComponent,
    CargoSignUpComponent,
    CarSignUpComponent,
    FindPasswordComponent,
    AllBidableCargoComponent,
    PlaceBidComponent,
    AllBiddedTaskComponent,
    TaskDetailComponent,
    MoneyListCarComponent,
    SumMoneyCarComponent,
    FeedbackComponent,
    MyCarComponent,
    CarPriceComponent,
    NewCargoComponent,
    AllCargoComponent,
    AllTaskComponent,
    SearchTaskComponent,
    MoneyListComponent,
    SumMoneyComponent,
    BlacklistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    // ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

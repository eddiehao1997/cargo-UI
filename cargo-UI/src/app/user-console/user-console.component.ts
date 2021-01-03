import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication/authentication.service';
import { DataTransactionService } from '../service/data-transaction/data-transaction.service';

@Component({
  selector: 'app-user-console',
  templateUrl: './user-console.component.html',
  styleUrls: ['./user-console.component.css']
})
export class UserConsoleComponent implements OnInit {

  public currentUser: string;
  public loading = true;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public dataTransactionService: DataTransactionService,
  ) { 
    console.log("user-console constructed");
    console.log(this.authenticationService.currentUserValue);
    this.currentUser = authenticationService.currentUserValue;
    
  }

  ngOnInit(): void {
    console.log("user-console onInit");
  }

  public logout() {
    console.log("user-console logging out")
    this.authenticationService.logout();
    console.log("user-console redirecting")
    this.router.navigate(['/login']);
    // window.location.href = 'https://anly.io/landing';
  }
}

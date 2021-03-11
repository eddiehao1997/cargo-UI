import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService,
  ) { 
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/landing']);
    }
    console.log("login constructed")
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/landing';
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // console.log(this.loginForm.controls.username.value);

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    const loginStatus = this.authenticationService.login(this.f.email.value, this.f.password.value)
    console.log(loginStatus);
    if (loginStatus === true) {
      console.log("login.component.ts login successful redirect to " + this.returnUrl);
      this.router.navigate([this.returnUrl]);
      this.loading = false;
    } else{
      console.log("login.component.ts login fail");
      this.error = "Incorrect email/Password";
      this.loading = false;
    }
  }

  public logout() {
    this.authenticationService.logout();
  }
}

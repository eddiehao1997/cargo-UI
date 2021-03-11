import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../service/authentication/authentication.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg = '';
  submitted: boolean;
  canSendValidation: boolean;
  validationButtonText: string;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService,
  ) { 
    this.submitted = false;
    this.canSendValidation = true;
    this.loading = false;
  }

  ngOnInit(): void {
    this.validationButtonText = "发送验证码";
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      phone: ['', Validators.required],
      validatationCode: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });

  }

  get f() { return this.signupForm.controls; }


  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm.value);
    alert("注册成功！");
    this.router.navigate(['/login']);
    // // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }

    // this.loading = true;
    // const loginStatus = this.authenticationService.login(this.f.username.value, this.f.password.value)
    // console.log(loginStatus);
    // if (loginStatus === true) {
    //   console.log("login.component.ts login successful redirect to " + this.returnUrl);
    //   this.router.navigate([this.returnUrl]);
    //   this.loading = false;
    // } else{
    //   console.log("login.component.ts login fail");
    //   this.error = "Incorrect Username/Password";
    //   this.loading = false;
    // }
  }

  public sendValidationCode() {
    console.log("requesting validation code");
    let counter = 60;
    this.validationButtonText = counter + "s后重新发送";
    const interval = setInterval(() => {
      console.log(counter);
      counter--;
      this.validationButtonText = counter + "s后重新发送";
    }, 1000);
    
  }

  public showTC() {
    alert()
  }
}

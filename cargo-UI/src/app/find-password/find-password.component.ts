import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-find-password',
  templateUrl: './find-password.component.html',
  styleUrls: ['./find-password.component.css']
})
export class FindPasswordComponent implements OnInit {
  refindForm: FormGroup;
  error = '';
  submitted: boolean;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService,
  ) { 
    this.submitted = false;
    this.loading = false;
  }

  ngOnInit(): void {
    this.refindForm = this.formBuilder.group({
      email: ['', Validators.required],
      emailConfirm: ['', Validators.required]
    });
  }

  get f() { return this.refindForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.refindForm.value);
    alert("发送成功！");
    this.router.navigate(['/login']);
  }

}

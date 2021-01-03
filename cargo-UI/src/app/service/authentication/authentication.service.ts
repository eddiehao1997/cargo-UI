import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {

    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    console.log(username);
    console.log(password);

    if (username == "admin-car" && password == "admin-car") {
      console.log("login as admin-car");
      localStorage.setItem('currentUser', "car-user");
      this.currentUserSubject.next("car-user");
      return true;
    } else{
      if (username == "admin-cargo" && password == "admin-cargo") {
        console.log("login as admin-cargo");
        localStorage.setItem('currentUser', "cargo-user");
        this.currentUserSubject.next("cargo-user");
        return true;  
      }
    }
    console.log("login fail");
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    console.log("logout");
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from "../guard/auth-guard-model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }
  getIsAUth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  login(userEmail: string, userPassword: string) {
    const baseURL = "http://localhost:3000/api/login";
    const authData: AuthData = {
      userEmail: userEmail,
      userPassword: userPassword,
    };

    this.http
      .post<{ token: string }>(baseURL, authData)
      .subscribe((response) => {
        const token = response.token;
        this.token = token;
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        this.router.navigate(["adminPannel"]);
      });
  }
  logout() {
    this.token = "null";
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate([""]);
  }
}

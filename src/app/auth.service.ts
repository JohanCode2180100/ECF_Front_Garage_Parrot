import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from "../guard/auth-guard-model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private token: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getToken() {
    return this.token;
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
        this.authStatusListener.next(true);
      });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { Review } from "./models/review";
import { FormContact } from "./models/formContact";
@Injectable({
  providedIn: "root",
})
export class GetService {
  private apiUrlAdmin = "http://localhost:3000/admin";

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  getReviewPending(): Observable<Review[]> {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(["/login"]);
    }
    return this.http
      .get<any>(`${this.apiUrlAdmin}/api/review/pending`)
      .pipe(map((data) => data.reviewStatus));
  }

  getFormContact(): Observable<FormContact[]> {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(["/login"]);
    }
    return this.http
      .get<any>(`${this.apiUrlAdmin}/api/contact`)
      .pipe(map((data) => data.contact));
  }
}

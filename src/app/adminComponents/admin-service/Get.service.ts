import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";
import { Review } from "../../models/review";
import { FormContact } from "../../models/formContact";
import { env } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GetService {
  private apiUrlAdmin = env.apiURLadmin;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}
  //Pending review
  getReviewPending(): Observable<Review[]> {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(["/login"]);
    }
    return this.http
      .get<any>(`${this.apiUrlAdmin}review/pending`)
      .pipe(map((data) => data.reviewStatus));
  }
  //READ PANNEL CONTACT
  getFormContact(): Observable<FormContact[]> {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(["/login"]);
    }
    return this.http
      .get<any>(`${this.apiUrlAdmin}contact`)
      .pipe(map((data) => data.contact));
  }
}

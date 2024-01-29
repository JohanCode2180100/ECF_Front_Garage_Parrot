import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, tap } from "rxjs";
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";
import { Review } from "../../services/models/review";
import { FormContact } from "../../services/models/formContact";
import { env } from "src/environments/environment";
import { HomePage } from "src/app/services/models/homePage";

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

  getHomePageByID(section_homePage_id: number): Observable<any> {
    const token = this.authService.getToken();
    const url = `${this.apiUrlAdmin}home_page/${section_homePage_id}`;
    if (!token) {
      this.router.navigate(["/login"]);
    }

    return this.http.get<any>(url);
  }
}

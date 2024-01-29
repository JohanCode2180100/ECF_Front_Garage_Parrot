import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";
import { HttpClient } from "@angular/common/http";
import { env } from "src/environments/environment";


@Injectable({ providedIn: "root" })
export class PutService {
  private apiUrl = env.apiURLadmin + "reviewPending";
  private apiUrlHomepage = env.apiURLadmin + "home_page";

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  approuvedPendingReviewById(reviewId: number) {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(["/login"]);
    }
    const message = "Avis validé";
    return this.http
      .put(`${this.apiUrl}/` + reviewId, message)
      .subscribe((response) => {
        console.log(message);
      });
  }

  updatedHomePageById() {}
}

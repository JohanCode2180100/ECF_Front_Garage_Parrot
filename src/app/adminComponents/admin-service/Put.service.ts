import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class PutService {
  private apiUrl = "http://localhost:3000/admin/api/reviewPending";

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
}

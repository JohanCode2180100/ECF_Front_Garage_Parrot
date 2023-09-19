import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable({ providedIn: "root" })
export class DeleteService {
  private apiUrl = "http://localhost:3000/admin/api/review";

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  reviewDeleteById(reviewId: number) {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(["/login"]);
    }
    const message = "Avis supprimé";
    return this.http
      .delete(`${this.apiUrl}/` + reviewId)
      .subscribe((response) => {
        console.log(message);
      });
  }
}

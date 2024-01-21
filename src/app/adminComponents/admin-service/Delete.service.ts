import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class DeleteService {
  private urlAdmin = environment.apiUrlAdminApi;

  private apireview = this.urlAdmin + "review";
  private apiForm = this.urlAdmin + "contact";

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
      .delete(`${this.apireview}/` + reviewId)
      .subscribe((response) => {
        console.log(message);
      });
  }

  formDeleteById(FormId: number) {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(["/login"]);
    }
    const message = "Formulaire supprimé";
    return this.http
      .delete(`${this.apiForm}/` + FormId)
      .subscribe((response) => {
        console.log(message);
      });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";
import { env } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class DeleteService {
  private urlAdmin = env.apiURLadmin;

  private apireview = this.urlAdmin + "review";
  private apiForm = this.urlAdmin + "contact";
  private apiDeletedCar = this.urlAdmin + "second_hand_car";

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

  carDeleteByID(second_hand_car_id: number) {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(["/login"]);
    }
    const message = "Voiture supprimée";
    return this.http
      .delete(`${this.apiDeletedCar}/` + second_hand_car_id)
      .subscribe((response) => {
        alert(message);
      });


  }

 
}

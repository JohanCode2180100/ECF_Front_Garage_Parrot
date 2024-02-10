import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Review } from "../../services/models/review";
import { Observable, tap } from "rxjs";
import { AuthService } from "../../auth.service";
import { Car } from "../../services/models/car";
import { env } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class PostsService {
  private reviewUrl = env.apiURL;
  private carUrl = env.apiURLadmin;
  private addAccountUrl = env.apiURLadmin;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}
  // ADD REVIEW----------------------------------------------------------------------------
  addPost(Review: Review): Observable<Review> {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(["/login"]);
    }

    return this.http.post<Review>(`${this.reviewUrl}review`, Review).pipe(
      tap(() => {
        this.router.navigate(["/"]).then(() => {
          window.scrollTo(0, 0);
          alert(
            "Votre avis sera visible apres validation des administrateurs du site"
          );
        });
      })
    );
  }

  // ADD CAR----------------------------------------------------------------------------
  addCar(formData: FormData): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(["/login"]);
    }

    return this.http.post<Car>(`${this.carUrl}second_hand_car`, formData).pipe(
      tap(() => {
        this.router.navigate(["/second-hand-car"]).then(() => {
          window.scrollTo(0, 0);
          alert("Voiture créée en base de données");
        });
      })
    );
  }
}

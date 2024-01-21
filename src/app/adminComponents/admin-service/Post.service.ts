import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Review } from "../../models/review";
import { Observable, tap } from "rxjs";
import { AuthService } from "../../auth.service";
import { FormContact } from "../../models/formContact";
import { Car } from "../../models/car";
import { FormGroup } from "@angular/forms";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class PostsService {
  private reviewUrl = environment.apiUrl + environment.api + "review";
  private formUrl = environment.apiUrl + environment.api + "contact";
  private carUrl = environment.apiUrlAdminApi + "second-hand-car";

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

    return this.http.post<Review>(this.reviewUrl, Review).pipe(
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

  // ADD FORM----------------------------------------------------------------------------
  addPostForm(FormContact: FormContact): Observable<FormContact> {
    return this.http.post<FormContact>(this.formUrl, FormContact);
  }

  // ADD CAR----------------------------------------------------------------------------
  addCar(form: FormGroup): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(["/login"]);
    }

    const formData = new FormData();
    formData.append("brand", form.get("brand").value);
    formData.append("model", form.get("model").value);
    formData.append("year", form.get("year").value);
    formData.append("price", form.get("price").value);
    formData.append("kilometer", form.get("kilometer").value);
    formData.append("description", form.get("description").value);
    formData.append("image", form.get("image").value);

    return this.http.post<Car>(this.carUrl, formData).pipe(
      tap(() => {
        this.router.navigate(["/second-hand-car"]).then(() => {
          window.scrollTo(0, 0);
          alert("Voiture créée en base de données");
        });
      })
    );
  }
}

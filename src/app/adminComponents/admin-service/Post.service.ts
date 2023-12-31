import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Review } from "../../models/review";
import { Observable, tap } from "rxjs";
import { AuthService } from "../../auth.service";
import { FormContact } from "../../models/formContact";

@Injectable({ providedIn: "root" })
export class PostsService {
  private reviewUrl = "http://localhost:3000/api/review";
  private formUrl = "http://localhost:3000/api/contact";

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

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

  addPostForm(FormContact: FormContact): Observable<FormContact> {
    return this.http.post<FormContact>(this.formUrl, FormContact);
  }

  addCar(){
    
  }
}

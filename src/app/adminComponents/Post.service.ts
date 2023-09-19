import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Review } from "./models/review";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({ providedIn: "root" })
export class PostsService {
  private apiUrl = "http://localhost:3000/api/review";

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

    return this.http.post<Review>(this.apiUrl, Review);
  }
}

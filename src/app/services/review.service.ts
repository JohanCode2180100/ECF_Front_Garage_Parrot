import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Review } from "../models/review";
import { env } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ReviewService {
  private apiUrl = env.apiURL;

  constructor(private http: HttpClient) {}

  getReviewValid(): Observable<Review[]> {
    return this.http
      .get<any>(`${this.apiUrl}review/valid`)
      .pipe(map((data) => data.reviewStatus));
  }
}

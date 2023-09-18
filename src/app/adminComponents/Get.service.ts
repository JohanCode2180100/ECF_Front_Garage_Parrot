import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
  })
  export class ReviewService {
    private apiUrl = "http://localhost:3000";
  
    constructor(private http: HttpClient) {}
  
    getReviewValid(): Observable<Review[]> {
      return this.http
        .get<any>(`${this.apiUrl}/api/review/valid`)
        .pipe(map((data) => data.reviewStatus));
    }
  }
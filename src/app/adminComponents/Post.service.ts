import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ReviewPost } from "./review-post.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
  private apiUrl = "http://localhost:3000/api/review";

  constructor(private http: HttpClient, private router: Router) {}

  addPost(ReviewPost: ReviewPost): Observable<ReviewPost> {
    return this.http.post<ReviewPost>(this.apiUrl, ReviewPost);
  }
}

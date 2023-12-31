import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HomePage } from "../models/homePage";

@Injectable({
  providedIn: "root",
})
export class HomePageService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getHomePage(): Observable<HomePage[]> {
    return this.http
      .get<any>(`${this.apiUrl}/api/section_homepage`)
      .pipe(map((data) => data.HomePage));
  }
}

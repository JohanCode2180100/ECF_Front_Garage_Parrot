import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HomePage } from "./models/homePage";

import { env } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class HomePageService {
  private apiUrl = env.apiURL;

  constructor(private http: HttpClient) {}

  getHomePage(): Observable<HomePage[]> {
    return this.http
      .get<any>(`${this.apiUrl}section_homePage`)
      .pipe(map((data) => data.title));
  }
}

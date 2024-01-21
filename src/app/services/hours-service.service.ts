import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hours } from "../models/hours";
import { Observable, map } from "rxjs";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HoursServiceService {
  private apiUrl = environment.apiUrl + environment.api

  constructor(private http: HttpClient) {}

  getHours(): Observable<Hours[]> {
    return this.http
      .get<any>(`${this.apiUrl}hours`)
      .pipe(map((data) => data.hours));
  }
}

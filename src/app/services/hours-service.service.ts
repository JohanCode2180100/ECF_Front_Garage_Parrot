import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hours } from "../components/hours/hours";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HoursServiceService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getHours(): Observable<Hours[]> {
    return this.http
      .get<any>(`${this.apiUrl}/api/hours`)
      .pipe(map((data) => data.hours));
  }
}

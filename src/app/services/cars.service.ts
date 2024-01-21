import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of, tap } from "rxjs";
import { Car } from "../models/car";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class carsService {
  apiUrlAll = environment.apiUrl + environment.api + "second-hand-car";

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http
      .get<any>(`${this.apiUrlAll}`)
      .pipe(map((data) => data.cars));
  }

  SearchCarName(term: string): Observable<Car[]> {
    if (term.length <= 1) {
      return of([]);
    }
    const url = `${this.apiUrlAll}?name=${term}`;
    return this.http.get<any>(url).pipe(map((data) => data.cars));
  }
  getCarsById(secondHandCarId: number): Observable<Car[]> {
    const url = `${this.apiUrlAll}/${secondHandCarId}`;
    return this.http.get<any>(url).pipe(map((data) => data.car));
  }
}

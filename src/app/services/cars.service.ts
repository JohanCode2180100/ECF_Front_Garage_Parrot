import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of, tap } from "rxjs";
import { Car } from "../models/car";
import { env } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class carsService {
  apiUrlAll = env.apiURL;

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http
      .get<any>(`${this.apiUrlAll}second_hand_car`)
      .pipe(map((data) => data.cars));
  }

  SearchCarName(term: string): Observable<Car[]> {
    if (term.length <= 1) {
      return of([]);
    }
    const url = `${this.apiUrlAll}second_hand_car?name=${term}`;
    return this.http.get<any>(url).pipe(map((data) => data.cars));
  }
  getCarsById(secondHandCarId: number): Observable<Car[]> {
    const url = `${this.apiUrlAll}second_hand_car/${secondHandCarId}`;
    return this.http.get<any>(url).pipe(map((data) => data.car));
  }
}

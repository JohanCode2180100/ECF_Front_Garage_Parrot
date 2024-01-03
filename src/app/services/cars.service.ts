import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { Car } from "../models/car";

@Injectable({
  providedIn: "root",
})
export class carsService {
  apiUrlAll = "http://localhost:3000/api/second-hand-car";

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http
      .get<any>(`${this.apiUrlAll}`)
      .pipe(map((data) => data.cars));
  }
  getCarsById(secondHandCarId: number): Observable<Car[]> {
    const url = `${this.apiUrlAll}/${secondHandCarId}`;
    return this.http.get<any>(url).pipe(map((data) => data.car));
  }


}

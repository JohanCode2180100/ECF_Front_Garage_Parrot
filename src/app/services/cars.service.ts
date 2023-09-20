import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Car } from "../models/car";

@Injectable({
  providedIn: "root",
})
export class carsService {
  private apiUrlAll = "http://localhost:3000/api/second-hand-car";
  private apiUrlId = "http://localhost:3000/api/second-hand-car/";

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http
      .get<any>(`${this.apiUrlAll}`)
      .pipe(map((data) => data.cars));
  }
}

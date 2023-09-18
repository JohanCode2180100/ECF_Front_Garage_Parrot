import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class carsService {
  private apiUrl = "assets/data/cars.json";

  constructor(private http: HttpClient) {}

  getCars(): Observable<any[]> {
    
    return this.http.get<any[]>(this.apiUrl);
    
  }
}


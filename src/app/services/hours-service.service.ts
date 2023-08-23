import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HoursServiceService {
  private apiUrl = "assets/data/hours.json";

  constructor(private http: HttpClient) {}

  getHours(): Observable<any[]> {
    
    return this.http.get<any[]>(this.apiUrl);
    
  }
}

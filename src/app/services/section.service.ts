import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Section } from "../models/Section";

@Injectable({
  providedIn: "root",
})
export class SectionService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getSection(): Observable<Section[]> {
    return this.http
      .get<any>(`${this.apiUrl}/api/section`)
      .pipe(map((data) => data.section));
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Section } from "../models/Section";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SectionService {
  private apiUrl = environment.apiUrl + environment.api;
  constructor(private http: HttpClient) {}

  getSection(): Observable<Section[]> {
    return this.http
      .get<any>(`${this.apiUrl}section`)
      .pipe(map((data) => data.section));
  }
}

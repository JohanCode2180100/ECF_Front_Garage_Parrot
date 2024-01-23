import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { env } from "src/environments/environment";
import { FormContact } from "../models/formContact";

@Injectable({
  providedIn: "root",
})
export class FormContactService {
  constructor(private http: HttpClient) {}
  private formUrl = env.apiURL;

  // ADD FORM----------------------------------------------------------------------------
  addPostForm(FormContact: FormContact): Observable<FormContact> {
    return this.http.post<FormContact>(`${this.formUrl}contact`, FormContact);
  }
}

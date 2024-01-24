import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { env } from "src/environments/environment";
import { FormContact } from "../models/formContact";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class FormContactService {
  constructor(private http: HttpClient, private router: Router) {}
  private formUrl = env.apiURL;

  // ADD FORM----------------------------------------------------------------------------
  addPostForm(FormContact: FormContact): Observable<FormContact> {
    return this.http
      .post<FormContact>(`${this.formUrl}contact`, FormContact)
      .pipe(
        tap(() => {
          this.router.navigate(["/"]).then(() => {
            window.scrollTo(0, 0);
            alert(
              "Votre avis sera visible apres validation des administrateurs du site"
            );
          });
        })
      );
  }
}

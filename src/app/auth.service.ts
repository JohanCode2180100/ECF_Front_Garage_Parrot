import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(private http: HttpClient) {}

  login(Email: string, Password: string): Observable<boolean> {
    // Créez un objet contenant les données d'authentification
    const authData = {
      Email: Email,
      Password: Password,
    };

    const baseURL = "http://localhost:3000/api/login";

    // Créez les en-têtes avec le jeton d'authentification
    const token = localStorage.getItem("jwtToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Utilisez les en-têtes lors de la réalisation de la requête HTTP
    return this.http.post<any>(`${baseURL}`, authData, { headers }).pipe(
      map((response) => {
        if (response && response.token) {
          // Stockez le JWT dans le stockage local
          localStorage.setItem("jwtToken", response.token);
          this.isLoggedIn = true;
          return true;
        } else {
          this.isLoggedIn = false;
          return false;
        }
      }),
      catchError((error) => {
        this.isLoggedIn = false;
        return of(false);
      })
    );
  }

  logout() {
    // Supprimez le JWT du stockage local ou du service d'authentification
    localStorage.removeItem("jwtToken");
    this.isLoggedIn = false;
  }
}

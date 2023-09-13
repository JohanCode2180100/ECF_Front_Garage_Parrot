import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

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
      username: Email,
      password: Password,
    };

    const baseURL = "http://localhost:3000/api/";

    return this.http.post<any>(`${baseURL}login`, authData).pipe(
      map((response) => {
        // Si la réponse du serveur contient un JWT
        if (response && response.token) {
          // Stockez le JWT dans le stockage local ou dans un service d'authentification
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

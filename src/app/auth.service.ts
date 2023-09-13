import { Injectable } from "@angular/core";
import { Observable, delay, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  

  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(Email: string, Password: string): Observable<boolean> {
    const isLoggedIn = Email == "aa" && Password == "aa";

    return of(isLoggedIn).pipe(
      delay(1000),
      tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}

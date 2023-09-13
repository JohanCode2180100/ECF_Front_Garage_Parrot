import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  message: string = "Vous êtes déconnecté.";
  Email: string;
  Password: string;
  auth: AuthService;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = "Vous êtes connecté";
    } else {
      this.message = "Email ou mot de passe incorrect";
    }
  }

  login() {
    this.message = "tentative de connexion";

    this.auth.login(this.Email, this.Password).subscribe((isLoggedInGuard) => {
      this.setMessage();
      if (isLoggedInGuard) {
        this.router.navigate(["/adminPannel"]);
      } else {
        this.Password = "";
        this.router.navigate(["/login"]);
      }
    });
  }
  logout() {
    this.auth.logout();
    this.message = "Vous êtes déconnecté";
  }
}

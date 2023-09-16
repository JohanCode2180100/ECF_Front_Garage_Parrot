import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  message: string = "Vous êtes déconnecté.";
  userEmail: string;
  userPassword: string;
  auth: AuthService;

  constructor(public authService: AuthService, private router: Router) {}

  isLoading = false;

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value.userEmail, form.value.userPassword);
   
  }
}

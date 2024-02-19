import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { NgForm } from "@angular/forms";
import { CsrfTokensService } from "../csrf-tokens.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  regexEmail: string = "([A-Za-z]|[^s@]){4,}@([A-Za-z]|[^s@]){2,}.(com|net|fr)";
  message: string = "Vous êtes déconnecté.";
  userEmail: string;
  userPassword: string;
  auth: AuthService;

  constructor(
    public authService: AuthService,

    public csrfTokenService: CsrfTokensService
  ) {}

  

  isLoading = false;

  

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.userEmail, form.value.userPassword);
  }

  
}



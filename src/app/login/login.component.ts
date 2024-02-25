import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, OnDestroy {
  regexEmail: string = "([A-Za-z]|[^s@]){4,}@([A-Za-z]|[^s@]){2,}.(com|net|fr)";
  message: string = "Vous êtes déconnecté.";
  userEmail: string;
  userPassword: string;
  auth: AuthService;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authStatus) => {
        this.isLoading = false;
      });
  }
  isLoading = false;

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.userEmail, form.value.userPassword);
  }
  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }
}

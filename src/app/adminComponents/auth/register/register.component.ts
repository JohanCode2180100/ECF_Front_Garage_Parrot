import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { map } from "rxjs";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";
import { env } from "src/environments/environment";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  errorMessage = "";
  private searchEmail = env.apiURLadmin;
  private addAccount = env.apiURLadmin;
  registerForm = new FormGroup(
    {
      email: new FormControl(
        "",
        [
          Validators.required,
          Validators.email,
          //regex avec au moins un chiffre, une lette et un carac spécial
          Validators.pattern(
            /([A-Z]|[a-z]|[^<>()\[\]\\\/.,;:\s@"]){4,}\@([A-Z]|[a-z]|[^<>()\[\]\\\/.,;:\s@"]){4,}\.(com|net|fr)/
          ),
        ],
        [this.uniqueMailAsyncValidator.bind(this)]
      ),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(
          // regex qui doit contenir maj, min, carac spé, chiffre avec un min de 12
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{12,}$"
        ),
      ]),
      confirmPassword: new FormControl("", Validators.required),
    },
    {
      validators: confirmPasswordValidator,
    }
  );

  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  get email() {
    return this.registerForm.controls.email;
  }
  get password() {
    return this.registerForm.controls.password;
  }
  get confirmPassword() {
    return this.registerForm.controls.confirmPassword;
  }

  onSubmit() {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(["/login"]);
    }
    if (this.registerForm.invalid) {
      return;
    }
    this.http
      .post(`${this.addAccount}addAdmin`, this.registerForm.value)
      .subscribe({
        next: () => {
          this.router.navigate(["/"]), alert("Administrateur ajouté");
        },
        error: (error) => {
          ((this.errorMessage =
            "un probleme est survenu, merci de réessayer ultérieurement"),
          error),
            this.registerForm.reset();
          alert("Erreur lors de l'insertion, merci de rééssayer");
        },
      });
  }

  uniqueMailAsyncValidator(control: AbstractControl) {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(["/login"]);
    }

    return this.http
      .post<{ exists: boolean }>(`${this.searchEmail}userValidationExists`, {
        email: control.value,
      })
      .pipe(
        map((response) => (response.exists ? { uniqueEmail: true } : null))
      );
  }
}
const confirmPasswordValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.get("password");
  const confirm = control.get("confirmPassword");

  if (password?.value === confirm?.value) {
    return null;
  }
  return {
    confirm: true,
  };
};

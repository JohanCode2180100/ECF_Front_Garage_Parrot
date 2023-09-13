import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export function isLoggedInGuard(): CanActivateFn {
  return (route, state) => {
    const router = inject(Router);
    const isAuthenticated = inject(AuthService).isLoggedIn;

    if (isAuthenticated) {
      return true;
    }
    router.navigate(["/login"]);
    return false;
  };
}

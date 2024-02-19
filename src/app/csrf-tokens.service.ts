import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CsrfTokensService {
  constructor() {}

  CsrfTokens(): string {
    const csrfToken =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN"))
        ?.split("=")[1] || "";
    return csrfToken;
  }
  
}

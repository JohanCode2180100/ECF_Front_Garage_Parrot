import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent implements OnInit {
  title: string = "garage_Parrot";

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoAuthAdmin();
  }
}

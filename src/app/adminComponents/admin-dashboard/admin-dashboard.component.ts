import { Component, OnInit } from "@angular/core";

import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styles: [],
})
export class AdminDashboardComponent implements OnInit {
  titleDashboard: string = "Monsieur PARROT";
  auth: AuthService;

  constructor(public authService: AuthService) {}

  ngOnInit() {}


}

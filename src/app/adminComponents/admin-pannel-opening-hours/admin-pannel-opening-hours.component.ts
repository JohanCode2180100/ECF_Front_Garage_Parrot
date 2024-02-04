import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { HoursServiceService } from "src/app/services/hours-service.service";
import { Hours } from "src/app/services/models/hours";

@Component({
  selector: "app-admin-pannel-opening-hours",
  templateUrl: "./admin-pannel-opening-hours.component.html",
  styleUrls: ["./admin-pannel-opening-Hours.component.css"],
})
export class AdminPannelOpeningHoursComponent implements OnInit {
  hoursData: Hours[];

  displayedColumns: string[] = [
    "demo-days",
    "demo-open_AM",
    "demo-close_AM",
    "demo-open_PM",
    "demo-close_PM",
    "demo-update",
  ];

  constructor(
    private hoursService: HoursServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getHours();
  }
  getHours() {
    this.hoursService.getHours().subscribe((data: Hours[]) => {
      this.hoursData = data;
    });
  }

  goToChangeHoursDay(opening_hours_id:number) {
    this.router.navigate(["adminHoursId/", opening_hours_id]);

  }

  backHome() {
    this.router.navigate(["/"]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}

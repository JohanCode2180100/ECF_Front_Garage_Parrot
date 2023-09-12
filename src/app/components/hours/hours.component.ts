import { Component, OnInit } from "@angular/core";
import { HoursServiceService } from "src/app/services/hours-service.service";
import { Hours } from "./hours";

@Component({
  selector: "app-hours",
  template: `<div class="hoursContainer">
    <div class="hoursTitle">
      <p>Horaires d'ouverture</p>
    </div>
    <li *ngFor="let day of hoursData">
      <span class="day">{{ day.Days }}: </span>
      <span class="hours"
        >{{ day.Open_AM }} : {{ day.Close_AM }} | {{ day.Open_PM }} -
        {{ day.Close_PM }}</span
      >
    </li>
  </div>`,
  styleUrls: ["./hours.component.css"],
})
export class HoursComponent implements OnInit {
  hoursData: Hours[];

  constructor(private hoursService: HoursServiceService) {}

  ngOnInit(): void {
    this.getHours();
  }
  getHours() {
    this.hoursService.getHours().subscribe((data: Hours[]) => {
      this.hoursData = data;
    });
  }
}

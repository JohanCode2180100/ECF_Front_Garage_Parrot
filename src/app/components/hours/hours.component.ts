import { Component, OnInit } from "@angular/core";
import { HoursServiceService } from "src/app/services/hours-service.service";
import { Hours } from "../../models/hours";

@Component({
  selector: "app-hours",
  template: `<div class="hoursContainer">
    <div class="hoursTitle">
      <p>Horaires d'ouverture</p>
    </div>
    <li *ngFor="let day of hoursData">
      <span class="day">{{ day.days }}: </span>
      <span class="hours"
        >{{ day.open_am }} : {{ day.close_am }} | {{ day.open_pm }} -
        {{ day.close_pm }}</span
      >
    </li>
  </div>`,
  styleUrls: ["./hours.component.css"],
})
export class HoursComponent implements OnInit {
  hoursData: Hours[];

  constructor(private hoursService: HoursServiceService) {}

  ngOnInit() {
    this.getHours();
  }
  getHours() {
    this.hoursService.getHours().subscribe((data: Hours[]) => {
      this.hoursData = data;
    });
  }
}

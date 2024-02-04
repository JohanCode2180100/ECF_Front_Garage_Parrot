import { Component, OnInit } from "@angular/core";
import { HoursServiceService } from "src/app/services/hours-service.service";
import { Hours } from "../../services/models/hours";

@Component({
  selector: "app-hours",
  template: `<div class="hoursContainer">
    <div class="hoursTitle">
      <p>Horaires d'ouverture</p>
    </div>
    <li *ngFor="let day of hoursData">
      <span class="day">{{ day.days }}: </span>
      <span class="hours"
        >{{ day.open_AM }} : {{ day.close_AM }} | {{ day.open_PM }} -
        {{ day.close_PM }}</span
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

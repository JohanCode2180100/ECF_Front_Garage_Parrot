import { Component, OnInit } from "@angular/core";
import { HoursServiceService } from "src/app/services/hours-service.service";

@Component({
  selector: "app-hours",
  template: `<div class="hoursContainer"> <div class="hoursTitle">
      <p>Horaires d'ouverture</p>
    </div>
    <li *ngFor="let day of hours">
      <span class="day">{{ day.day }}</span>
      :
      <span class="hours"
        >{{ day.openAM }} - {{ day.closeAM }} | {{ day.openPM }} -
        {{ day.closePM || day.close }}</span
      >
    </li></div>`,
  styleUrls: ["./hours.component.css"],
})
export class HoursComponent implements OnInit {
  hours: any[] = [];

  constructor(private hoursService: HoursServiceService) {}

  ngOnInit(): void {
    this.getHours();
  }
  private getHours(): void {
    this.hoursService.getHours().subscribe((data) => {
      this.hours = data;
    });
  }


}

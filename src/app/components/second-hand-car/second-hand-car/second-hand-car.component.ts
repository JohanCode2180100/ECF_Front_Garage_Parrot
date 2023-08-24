import { Component, OnInit } from "@angular/core";
import { carsService } from "src/app/services/cars.service";

@Component({
  selector: "app-second-hand-car",
  templateUrl: "./second-hand-car.component.html",
  styleUrls: ["./second-hand-car.component.css"],
})
export class SecondHandCarComponent implements OnInit {
  cars: any[] = [];

  constructor(private carsService: carsService) {}

  ngOnInit(): void {
    this.getCars();
  }

  private getCars(): void {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { carsService } from "src/app/services/cars.service";
import { Car } from "src/app/models/car";

@Component({
  selector: "app-filter-cars",
  templateUrl: "./filter-cars.component.html",
  styleUrls: ["./filter-cars.component.css"],
})
export class FilterCarsComponent implements OnInit {
  Cars: Car[];

  optionsCarsName: string[] = [];

  maxPrice: Number;
  minPrice: number;

  maxKilometer: Number;
  minKilometer: Number;

  maxYear: Number;
  minYear: Number;

  constructor(private carsService: carsService, private router: Router) {}

  ngOnInit() {
    this.getCarsFilter();
  }
  myControl = new FormControl("");

  getCarsFilter() {
    this.carsService.getCars().subscribe((data: Car[]) => {
      if (data) {
        this.Cars = data;

        //Interpolation name
        this.optionsCarsName = this.Cars.map((car) => car.name);
        //Interpolation price
        this.maxPrice = Math.max.apply(
          null,
          this.Cars.map((car) => car.price)
        );
        this.minPrice = Math.min.apply(
          null,
          this.Cars.map((car) => car.price)
        );
        //Interpolation kilometer
        this.maxKilometer = Math.max.apply(
          null,
          this.Cars.map((car) => car.kilometer)
        );
        this.minKilometer = Math.min.apply(
          null,
          this.Cars.map((car) => car.kilometer)
        );
        //Interpolation year
        this.maxYear = Math.max.apply(
          null,
          this.Cars.map((car) => car.price)
        );
        this.minYear = Math.min.apply(
          null,
          this.Cars.map((car) => car.price)
        );
      } else {
        console.error("Aucune donnée n'a été renvoyée par le service.");
      }
    });
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + "k";
    }

    return `${value}`;
  }
  yearDisplay(value: number): string {
    return `${value}`;
  }
}

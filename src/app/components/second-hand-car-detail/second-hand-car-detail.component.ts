import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Car } from "src/app/models/car";
import { carsService } from "src/app/services/cars.service";

@Component({
  selector: "app-second-hand-car-detail",
  template: ` <p>BIENTOT DISPONIBLE</p>`,
  styles: [],
})
export class CarDetailComponent implements OnInit {
  carList: Car[];
  car: Car;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carService: carsService
  ) {}

  ngOnInit() {}

  navigateToHome() {}
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { carsService } from "src/app/services/cars.service";
import { Car } from "src/app/models/car";
@Component({
  selector: "app-second-hand-car",
  templateUrl: "./second-hand-car.component.html",
  styleUrls: ["./second-hand-car.component.css"],
})
export class SecondHandCarComponent implements OnInit {
  carsData: Car[];
  car: Car;

  constructor(private carsService: carsService, private router: Router) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carsService.getCars().subscribe((data: Car[]) => {
      if (data) {
        
        this.carsData = data;
      } else {
        console.error("Aucune donnée n'a été renvoyée par le service.");
      }
    });
  }

  goToCarById(car: Car) {
    this.router.navigate(["second-hand-car/", car.second_hand_car_id]);
  }
  navigateToHome() {
    this.router.navigate(["/"]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}

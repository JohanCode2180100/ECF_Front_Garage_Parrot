import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { carsService } from "src/app/services/cars.service";

@Component({
  selector: "app-second-hand-car",
  templateUrl: "./second-hand-car.component.html",
  styleUrls: ["./second-hand-car.component.css"],
})
export class SecondHandCarComponent implements OnInit {
  cars: any[] = [];

  constructor(private carsService: carsService, private router:Router) {}

  ngOnInit(): void {
    this.getCars();
  }

  private getCars(): void {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }
  navigateToHome(){
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0); 
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { carsService } from "src/app/services/cars.service";
import { Car } from "src/app/models/car";
import { Router } from "@angular/router";
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs";

@Component({
  selector: "app-filter-cars",
  templateUrl: "./filter-cars.component.html",
  styleUrls: ["./filter-cars.component.css"],
})
export class FilterCarsComponent implements OnInit {
  Cars: Car[];
  optionsCarsBrand: string[] = [];

  //déclaration fonction recherche avec RXJS
  searchTerms = new Subject<string>();
  Car$: Observable<Car[]>;

  maxPrice: Number;
  minPrice: Number;
  maxKilometer: Number;
  minKilometer: Number;
  maxYear: Number;
  minYear: Number;
  brand: string;
  price: number;
  kilometer: number;
  year: number;

  constructor(private carsService: carsService, private router: Router) {}

  ngOnInit() {
    this.Car$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      //annule la derniere en cours, permet de rechercher la plus recente
      switchMap((term) => this.carsService.SearchCarName(term))
    );
  }

  // Recherche d'un modele ou d'une marque
  search(term: string) {
    //ici on pousse les entrées utilisateurs avec next (comme push)
    this.searchTerms.next(term);
  }

  //redirection vers le détail de la voiture lors du click sur un filtrage de recherche
  toGoDetailCar(car: Car) {
    this.router.navigate(["second-hand-car/", car.second_hand_car_id]);
  }

  getCarsFilter() {
    this.carsService.getCars().subscribe((data: Car[]) => {
      if (data) {
        this.Cars = data;
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

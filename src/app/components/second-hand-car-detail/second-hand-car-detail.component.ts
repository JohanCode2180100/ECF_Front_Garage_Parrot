// car-detail.component.ts
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Car } from "src/app/services/models/car";
import { carsService } from "src/app/services/cars.service";

@Component({
  selector: "app-second-hand-car-detail",
  template: `
    <div class="container">
      <h2>{{ carByID.brand }} {{ carByID.model }} - {{ carByID.year }}</h2>
      <img [src]="carByID.image" alt="image d'une voiture d'occasions" />
      <p>{{ carByID.kilometer }} km</p>
      <p class="price">{{ carByID.price | currency : "EUR" : "symbol" }}</p>
      <p>{{ carByID.description }}</p>

      <mat-card-actions class="cardAction">
        <button mat-button class="submit">Demande de renseignements</button>
      </mat-card-actions>
      <span class="createdAt"
        >Mise en ligne de l'annonce : {{ carByID.createdAt }}</span
      >

      <div class="backCar">
        <a (click)="returnToCars()"> <span>Page précédente</span> </a>
      </div>
    </div>
  `,
  styleUrls: ["./second-hand-car-detail.component.css"],
})
export class CarDetailComponent implements OnInit {
  carByID: Car;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carsService: carsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const carId = +params["id"];

      this.carsService.getCarsById(carId).subscribe(
        (data: Car[]) => {
          this.carByID = data[0];
        },
        (error) => {
          console.error(
            "Une erreur s'est produite lors de la récupération des données :",
            error
          );
        }
      );
    });
  }

  returnToCars() {
    this.router.navigate(["/second-hand-car"]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}

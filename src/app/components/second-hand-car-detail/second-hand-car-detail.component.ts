// car-detail.component.ts
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Car } from "src/app/models/car";
import { carsService } from "src/app/services/cars.service";

@Component({
  selector: "app-second-hand-car-detail",
  template: `
    <div class="container" *ngIf="carByID && carByID.length > 0 && carByID[0]">
      <h2>
        {{ carByID[0].brand }} {{ carByID[0].name }} - {{ carByID[0].year }}
      </h2>
      <img [src]="carByID[0].picture" alt="image d'une voiture d'occasions" />
      <p>{{ carByID[0].kilometer }} km</p>
      <p>{{ carByID[0].price | currency : "EUR" : "symbol" }}</p>
      <p>{{ carByID[0].description }}</p>

      <mat-card-actions class="cardAction">
        <button mat-button class="submit">Demande de renseignements</button>
      </mat-card-actions>
      <span class="createdAt"
        >Mise en ligne de l'annonce : {{ carByID[0].createdAt }}</span
      >
    </div>
    <p *ngIf="!carByID || carByID.length === 0">Voiture introuvable</p>

    <div class="backCar">
      <a (click)="returnToCars()">
        <span class="material-symbols-outlined"> directions_car </span>
      </a>
    </div>
  `,
  styleUrls: ["./second-hand-car-detail.component.css"],
})
export class CarDetailComponent implements OnInit {
  carByID: Car[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carsService: carsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const carId = +params["id"];

      this.carsService.getCarsById(carId).subscribe(
        (data: any) => {
          console.log("Données de la voiture :", data);

          if (data.car && data.car.length > 0) {
            this.carByID = data.car;
          } else {
            console.error(
              "Les données de la voiture sont vides ou incorrectes."
            );
          }
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

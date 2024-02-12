import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/services/models/car";
import { carsService } from "src/app/services/cars.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-updated-car",
  template: `
    <table
      mat-table
      [dataSource]="dataSection_Car"
      class="mat-elevation-z8 demo-table"
    >
      <!-- Position Column -->
      <ng-container matColumnDef="demo-position">
        <th mat-header-cell *matHeaderCellDef>No.</th>
        <td mat-cell *matCellDef="let element">
          {{ element.second_hand_car_id }}
        </td>
      </ng-container>

      <!-- Weight Column -->
      <ng-container matColumnDef="demo-brand">
        <th mat-header-cell *matHeaderCellDef>Marque</th>
        <td mat-cell *matCellDef="let element">{{ element.brand }}</td>
      </ng-container>

      <ng-container matColumnDef="demo-model">
        <th mat-header-cell *matHeaderCellDef>Model</th>
        <td mat-cell *matCellDef="let element">{{ element.model }}</td>
      </ng-container>

      <ng-container matColumnDef="demo-year">
        <th mat-header-cell *matHeaderCellDef>Année</th>
        <td mat-cell *matCellDef="let element">{{ element.year }}</td>
      </ng-container>

      <ng-container matColumnDef="demo-kilometer">
        <th mat-header-cell *matHeaderCellDef>KM</th>
        <td mat-cell *matCellDef="let element">{{ element.kilometer }}</td>
      </ng-container>
      <ng-container matColumnDef="demo-price">
        <th mat-header-cell *matHeaderCellDef>Prix</th>
        <td mat-cell *matCellDef="let element">
          {{ element.price | currency : "EUR" : "symbol" }}
        </td>
      </ng-container>
      <ng-container matColumnDef="demo-createdAt">
        <th mat-header-cell *matHeaderCellDef>Mise en ligne</th>
        <td mat-cell *matCellDef="let element">
          {{ element.createdAt | date : "dd/MM/yyyy" }}
        </td>
      </ng-container>

      <ng-container matColumnDef="demo-update">
        <th mat-header-cell *matHeaderCellDef>Action</th>
        <td mat-cell *matCellDef="let element">
          <button
            (click)="goToUpdateCarId(element.second_hand_car_id)"
            mat-fab
            color="primary"
          >
            <mat-icon mat-button color="accent">build_circle</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styles: [],
})
export class UpdatedCarComponent implements OnInit {
  dataSection_Car: Car[];
  car: Car[];

  constructor(private carsService: carsService, private router: Router) {}

  ngOnInit() {
    this.getCars();
  }

  displayedColumns: string[] = [
    "demo-position",
    "demo-brand",
    "demo-model",
    "demo-year",
    "demo-price",
    "demo-createdAt",
    "demo-update",
  ];

  getCars() {
    this.carsService.getCars().subscribe((data: Car[]) => {
      if (data) {
        this.dataSection_Car = data;
      } else {
        console.error("Aucune donnée n'a été renvoyée par le service.");
      }
    });
  }

  goToUpdateCarId(second_hand_car_id) {
    this.router.navigate(["adminPannelCarByID/", second_hand_car_id]);
  }
}

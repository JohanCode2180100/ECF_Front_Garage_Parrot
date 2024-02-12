import { Component, OnInit } from "@angular/core";
import { carsService } from "src/app/services/cars.service";
import { Car } from "src/app/services/models/car";
import { DeleteService } from "../../admin-service/Delete.service";

@Component({
  selector: "app-deleted-car",
  template: `
    <table
      mat-table
      [dataSource]="data_car"
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
          {{ element.createdAT | date : "dd/MM/yyyy" }}
        </td>
      </ng-container>

      <ng-container matColumnDef="demo-update">
        <th mat-header-cell *matHeaderCellDef>Action</th>
        <td mat-cell *matCellDef="let element">
          <button
            mat-fab
            color="warn"
            aria-label="Example icon button with a delete icon"
            (click)="deleteCarId(element.second_hand_car_id)"
          >
            <mat-icon>delete</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styles: [],
})
export class DeletedCarComponent implements OnInit {
  constructor(
    private carsService: carsService,
    private deleteService: DeleteService
  ) {}

  ngOnInit() {
    this.getCars();
  }

  data_car: Car[];
  car: Car[];
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
        this.data_car = data;
      } else {
        console.error("Aucune donnée n'a été renvoyée par le service.");
      }
    });
  }

  deleteCarId(second_hand_car_id: number) {
    this.deleteService.carDeleteByID(second_hand_car_id);
    this.getCars();
  }
}

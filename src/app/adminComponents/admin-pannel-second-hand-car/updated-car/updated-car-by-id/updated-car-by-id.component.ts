import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PutService } from "src/app/adminComponents/admin-service/Put.service";
import { carsService } from "src/app/services/cars.service";

@Component({
  selector: "app-updated-car-by-id",
  templateUrl: "./updated-car-by-id.component.html",
  styleUrls: ["./updated-car-by-id.component.css"],
})
export class UpdatedCarByIDComponent implements OnInit {
  id = this.route.snapshot.params["id"];
  data: any;
  dataBinding: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: carsService,
    private putService: PutService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params["id"];

      this.carService.getCarsById(id).subscribe((data) => {
        this.data = data[0];

        this.dataBinding = { ...this.data };
        console.log(this.data);
      });
    });
  }


  updatedData() {
    this.putService.updatedCarById(this.id, this.dataBinding).subscribe(
      (response) => {
        console.log("mise à jour des données", response);
      },
      (error) => {
        console.log("erreur de maj", error);
      }
    );
  }

  backHome() {
    this.router.navigate(["/"]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}

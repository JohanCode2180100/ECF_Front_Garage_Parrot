import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GetService } from "../../admin-service/Get.service";
import { PutService } from "../../admin-service/Put.service";

@Component({
  selector: "app-admin-hours-id",
  templateUrl: "./admin-hours-id.component.html",
  styleUrls: ["./admin-hours-id.component.css"],
})
export class AdminHoursIdComponent implements OnInit {
  id = this.route.snapshot.params["id"];
  public data: any;
  public databinding: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private putService: PutService,
    private getService: GetService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params["id"];

      this.getService.getHoursById(id).subscribe(
        (data) => {
          this.data = data.hours[0];
          this.databinding = { ...this.data };
        },
        (error) => {
          console.error(
            "Une erreur s est produite lors de la récupération des données",
            error
          );
        }
      );
    });
  }
  updatedHours() {
    this.putService.updatedHoursbyId(this.id, this.databinding).subscribe(
      (response) => {
        alert("Données mises à jours");
        this.previousPage();
      },
      (error) => {
        console.error("erreur de maj", error);
      }
    );
  }

  backHome() {
    this.router.navigate(["/"]).then(() => {
      window.scrollTo(0, 0);
    });
  }
  previousPage() {
    this.router.navigate(["/adminPannel/adminPannel_HomePage"]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}

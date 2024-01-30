import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetService } from "../../admin-service/Get.service";
import { PutService } from "../../admin-service/Put.service";

@Component({
  selector: "app-home-page-id",

  templateUrl: "./home-page-id.component.html",
  styles: [],
})
export class HomePageIdComponent implements OnInit {
  id = this.actRoute.snapshot.params["id"];
  public data: any;
  public dataBinding: any = {};

  constructor(
    private route: ActivatedRoute,
    private getService: GetService,
    public actRoute: ActivatedRoute,
    private putService: PutService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params["id"];

      this.getService.getHomePageByID(id).subscribe(
        (data) => {
          this.data = data.homePage[0];
          this.dataBinding = { ...this.data };
        },
        (error) => {
          console.error(
            "Une erreur s'est produite lors de la récupération des données",
            error
          );
        }
      );
    });
  }

  updatedData() {
    this.putService.updatedHomePageById(this.id, this.dataBinding).subscribe(
      (response) => {
        console.log("mise à jour des données", response);
      },
      (error) => {
        console.error("erreur de maj", error);
      }
    );
  }
}

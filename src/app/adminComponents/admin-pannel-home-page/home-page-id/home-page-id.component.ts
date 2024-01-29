import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetService } from "../../admin-service/Get.service";
import { HomePage } from "src/app/services/models/homePage";
import { NgForm } from "@angular/forms";
import { PutService } from "../../admin-service/Put.service";

@Component({
  selector: "app-home-page-id",

  templateUrl: "./home-page-id.component.html",
  styles: [],
})
export class HomePageIdComponent implements OnInit {
  id = this.actRoute.snapshot.params["id"];
  homePageData: HomePage = { section_homePage_id: 0, title: "", content: "" };

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
          console.log("Données reçues du service:", data);

          if (data.homePage && data.homePage.length > 0) {
            this.homePageData = data.homePage[0];
            console.log("homePageData après attribution:", this.homePageData);
          } else {
            console.error("Aucune donnée valide reçue du service.");
          }
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

  onSubmit(form){}

  
}

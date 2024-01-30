import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GetService } from "../../admin-service/Get.service";
import { PutService } from "../../admin-service/Put.service";

@Component({
  selector: "app-home-page-id",

  templateUrl: "./home-page-id.component.html",
  styleUrls: ["./home-page-id.component.css"],
})
export class HomePageIdComponent implements OnInit {
  id = this.actRoute.snapshot.params["id"];
  public data: any;
  public dataBinding: any = {};

  displayedColumns: string[] = ["Titre", "Contenu"];

  constructor(
    private route: ActivatedRoute,
    private getService: GetService,
    public actRoute: ActivatedRoute,
    private putService: PutService,
    private router: Router
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
  //retour sur page d'accueil
  backHome() {
    console.log("bonjour");
    this.router.navigate(["/"]).then(() => {
      window.scrollTo(0, 0);
    });
  }
  //retour page précédente
  previousPage() {
    this.router.navigate(["/adminPannel/adminPannel_HomePage"]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}

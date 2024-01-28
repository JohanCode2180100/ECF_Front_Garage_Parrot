import { Component, OnInit } from "@angular/core";
import { HomePage } from "../../services/models/homePage";
import { AuthService } from "src/app/auth.service";
import { HomePageService } from "src/app/services/homePage.service";

@Component({
  selector: "app-admin-pannel-home-page",
  templateUrl: "./admin-pannel-home-page.component.html",
  styles: [],
})
export class AdminPannelHomePageComponent implements OnInit {
  dataSection_HomePage: HomePage[] = [];

  displayedColumns: string[] = ["demo-position", "demo-titre", "demo-contenu", "demo-update"];

  constructor(
    private homePageService: HomePageService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.getHomePage();
  }

  getHomePage() {
    this.homePageService.getHomePage().subscribe((data: HomePage[]) => {
      if (data) {
        this.dataSection_HomePage = data;
      } else {
        console.error(
          "Aucune données n'a été trouvé par le service de récupération"
        );
      }
    });
  }

  updateSectionId(section_homePage_id) {}
}

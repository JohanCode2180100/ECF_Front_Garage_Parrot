import { Component, OnInit } from "@angular/core";
import { HomePageService } from "src/app/services/homePage.service";

import { HomePage } from "src/app/services/models/homePage";

@Component({
  selector: "app-services-cards",
  template: `
    <h2 class="section2Title">
      <span class="red"
        >DÉCOUVREZ LES PRESTATIONS PROPOSÉES PAR LES RÉPARATEURS DU
      </span>
      <span class="dark">GARAGE PARROT</span>
    </h2>

    <div class="section2Card">
      <div class="card" *ngFor="let section of homePageData">
        <div class="title">
          <h3>{{ section.title }}</h3>
        </div>
        <div class="containCard">
          <p>{{ section.content }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./services-cards.component.css"],
})
export class ServicesCardsComponent implements OnInit {
  homePageData: HomePage[];

  constructor(private homePageService: HomePageService) {}

  ngOnInit() {
    this.getHomePage();
  }
  getHomePage() {
    this.homePageService.getHomePage().subscribe((data) => {
      this.homePageData = data;
      console.log(this.homePageData);
    });
  }
}

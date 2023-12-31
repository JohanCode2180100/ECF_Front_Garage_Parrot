import { Component, OnInit } from "@angular/core";
import { Section } from "src/app/models/Section";
import { SectionService } from "src/app/services/section.service";

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
      <div class="card" *ngFor="let service of sectionData">
        <div class="title">
          <h3>{{ service.Title }}</h3>
        </div>
        <div class="containCard">
          <p>{{ service.Content }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./services-cards.component.css"],
})
export class ServicesCardsComponent implements OnInit {
  sectionData: Section[];

  constructor(private sectionService: SectionService) {}

  ngOnInit() {
    this.getSection();
  }
  getSection() {
    this.sectionService.getSection().subscribe((data) => {
      this.sectionData = data;
    });
  }
}

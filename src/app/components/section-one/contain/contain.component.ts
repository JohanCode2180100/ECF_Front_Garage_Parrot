import { Component } from "@angular/core";

@Component({
  selector: "app-contain",
  template: `
  <div class="title titleDisplay">
    <h1 class="title">
      <span class="red">CONFIEZ VOTRE VEHICULE A </span>
      <span class="dark">DES MAINS EXPERTES</span>
    </h1>
  </div>

    <div class="contain">
      <br />
      <p *ngFor="let contain of contains" class="p">{{ contain }}</p>
    </div>
  `,

  styleUrls: ["./contain.component.css"],
})
export class sectionOneContainComponent {
  contains: string[] = [
    "Avec une expérience de plus de 15 ans dans le domaine de la réparation automobile, nous avons forgé notre réputation sur la base de la qualité, de la fiabilité et de l'engagement envers nos clients.",
    "Choisir le garage automobile Parrot, c'est opter pour la tranquilité d'esprit, la qualité et le savoir-faire. Nous nous engageons à traiter votre voiture comme la nôtre, avec la plus grand respect et une attention minutieuse à chaque détail.",
    "Rejoingnez notre famille de clients satisfaits dés aujourd'hui !",
    "Contactez-nous pour toute demande d'information.",
  ];
}

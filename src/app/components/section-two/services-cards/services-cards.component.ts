import { Component } from "@angular/core";

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
      <div class="card" *ngFor="let service of serviceCards">
        <div class="title">
          <h3>{{ service.title }}</h3>
        </div>
        <div class="containCard">
          <p>{{ service.content }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./services-cards.component.css"],
})
export class ServicesCardsComponent {
  serviceCards = [
    {
      title: "Réparation de carrosserie",
      content:
        "Qu'il s'agisse de petites éraflures ou de dommages plus importants, notre équipe qualifiée possède l'expertise nécessaire pour redonner à votre véhicule son apparence d'origine. Chaque détail compte, et nous mettons tout en œuvre pour vous offrir des réparations de carrosserie précises et de qualité.",
    },
    {
      title: "Mécanique des voitures",
      content:
        "Nos mécaniciens expérimentés sont équipés pour diagnostiquer et résoudre efficacement tous les problèmes mécaniques de votre véhicule.De la simple maintenance aux réparations plus complexes, nous utilisons les dernieres techniques pour assurer la performance et la sécurité de votre voiture.",
    },
    {
      title: "Entretien",
      content:
        "L'entretien régulier est essentiel pour prolonger la durée de vie de votre voiture et maintenir ses performances optimales. Au Garage Automobile Parrot, nous proposons des services d'entretien complets, comprenant la vidange d'huile, la vérification des systèmes, le remplacement des filtres et bien plus encore.",
    },
    {
      title: "Véhicules d'occasion",
      content:
        "Vous êtes à la recherche d’une nouvelle voiture ? Nous avons une sélection de pépites d’occasion toutes marques à saisir. Nos véhicules d’occasions sont certifiés par notre garage et contrôlés par nos experts mécanicien. Consultez notre nos véhicules d’occasion et contactez-nous",
    },
  ];
}

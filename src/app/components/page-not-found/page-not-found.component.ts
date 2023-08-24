import { Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: `
    <div class="container">
      <span> OUPSSSSS ERROR 404 - PAGE NOT FOUND </span>
      <div>
        <img src="./assets/picture/404.png" alt="page not found" />
      </div>
      <span>Vous avez fait une sortie de route !!!</span>
      <div class="error404">
        
        <a routerLink="/"><span> Revenir vers l'accueil</span></a>
      </div>
    </div>
  `,
  styleUrls: ["page-not-found.component.css"],
})
export class PageNotFoundComponent {}

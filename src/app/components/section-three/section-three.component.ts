import { Component } from "@angular/core";

@Component({
  selector: "app-section-three",
  template: `
    <div class="container">
      <h2 class="section3Title">
        <span class="red">NOS ENGAGEMENTS </span>
        <span class="dark">GARAGE PARROT</span>
      </h2>

      <div class="section3Card">
        <div class="card">
          <div class="title">
            <h3>Révisions constructeurs</h3>
          </div>
          <div class="containCard">
            <span class="material-symbols-outlined"> workspace_premium</span>
          </div>
        </div>
      </div>

      <div class="section3Card">
        <div class="card">
          <div class="title">
            <h3>Qualité d'exécution</h3>
          </div>
          <div class="containCard">
            <span class="material-symbols-outlined"> construction </span>
          </div>
        </div>
      </div>

      <div class="section3Card">
        <div class="card">
          <div class="title">
            <h3>Satisfaction clients</h3>
          </div>
          <div class="containCard">
            <span class="material-symbols-outlined"> emoji_events </span>
          </div>
        </div>
      </div>

      <div class="section3Card">
        <div class="card">
          <div class="title">
            <h3>Confiance</h3>
          </div>
          <div class="containCard">
            <span class="material-symbols-outlined"> verified_user </span>
          </div>
        </div>
      </div>

      <div class="section3Card">
        <div class="card">
          <div class="title">
            <h3>Conseils personnalisés</h3>
          </div>
          <div class="containCard">
            <span class="material-symbols-outlined"> instant_mix </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./section-three.component.css"],
})
export class SectionThreeComponent {}

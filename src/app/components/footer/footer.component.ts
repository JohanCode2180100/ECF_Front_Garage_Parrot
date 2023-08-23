import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer>
      <div class="sectionFooter1">
        <div class="picture">
          <img
            src="../../../assets/picture/logoGarageParrot.png"
            alt="logo du garage de Monsieur Parrot"
          />
        </div>
        <div class="adress">
          <p>0322303030</p>
          <p>1 RUE TOULOUSE</p>
          <p>31000 TOULOUSE</p>
        </div>
      </div>

      <app-hours></app-hours>
    </footer>
  `,
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {}

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
          <br />
          <p>1 RUE TOULOUSE</p>
          <p>31000 TOULOUSE</p>
        </div>
      </div>
      <div class="footer2">
        <app-hours></app-hours>
      </div>
    </footer>
  `,
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {}

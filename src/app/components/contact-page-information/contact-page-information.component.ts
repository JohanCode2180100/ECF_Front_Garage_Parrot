import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact-page-information",
  template: `
    <div class="container">
      <div class="title">
        <h2>DEMANDE D'INFORMATIONS</h2>
      </div>
      <h3>
        Pour toute demande d'informations, merci de compléter ce formulaire
      </h3>

      <div class="formContainer">
        <form #form="ngForm" (submit)="onSubmit(form)" class="form">
          <input ngModel type="text" name="Nom" id="name" placeholder="Nom*" />
          <input
            ngModel
            type="text"
            name="Prénom"
            id="firstName"
            placeholder="Prénom*"
          />

          <input
            ngModel
            type="text"
            name="Adresse"
            id="address"
            placeholder="Adresse*"
          />
          <input
            required
            email
            ngModel
            type="Email"
            name="Email"
            id="email"
            placeholder="Email*"
          />

          <input
            ngModel
            type="tel"
            name="Téléphone"
            id="phone"
            placeholder="téléphone*"
          />

          <textarea
            ngModel
            rows="8"
            cols="28"
            type="textArea"
            name="message"
            id="message"
            placeholder="Votre message*"
          ></textarea>
          <div class="button">
            <button class="btn">Envoyer le formulaire</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ["./contact-page-information.css"],
})
export class ContactPageInformationComponent {
  onSubmit(form: NgForm) {
    console.log(form);
  }
}

import { Component, ElementRef, ViewChild } from "@angular/core";
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
          <div class="error">
            <p
              class="invalid-feedback"
              *ngIf="name.touched && name.hasError('required')"
            >
              Le nom est obligatoire
            </p>
            <span
              class="invalid-feedback"
              *ngIf="firstName.touched && firstName.hasError('required')"
            >
              Le prénom est obligatoire
            </span>
            <span
              class="invalid-feedback"
              *ngIf="firstName.touched && firstName.hasError('required')"
            >
              L'adresse' est obligatoire
            </span>
            <span
              class="invalid-feedback"
              *ngIf="email.touched && email.hasError('required')"
            >
              L'adresse mail est obligatoire
            </span>
            <span
              class="invalid-feedback"
              *ngIf="email.touched && email.hasError('email')"
            >
              L'adresse mail est invalide
            </span>
            <p class="invalid-feedback" *ngIf="phone.touched && phone.invalid">
              Le numéro de téléphone est obligatoire et doit contenir 10
              chiffres
            </p>
            <p
              class="invalid-feedback"
              *ngIf="message.touched && message.invalid"
            >
              Vous devez inclure un message pour valider ce formulaire
            </p>
          </div>

          <input
            required
            name
            ngModel
            #name="ngModel"
            type="text"
            name="Nom"
            id="name"
            placeholder="Nom*"
          />

          <input
            required
            firstName
            ngModel
            #firstName="ngModel"
            type="text"
            name="Prénom"
            id="firstName"
            placeholder="Prénom*"
          />

          <input
            required
            adress
            ngModel
            #adress="ngModel"
            type="text"
            name="Adresse"
            id="address"
            placeholder="Adresse*"
          />

          <input
            required
            email
            ngModel
            #email="ngModel"
            type="Email"
            name="Email"
            id="email"
            placeholder="Email*"
          />

          <input
            required
            phone
            ngModel
            #phone="ngModel"
            type="phone"
            pattern="[0-9]{10}"
            name="Téléphone"
            id="phone"
            placeholder="téléphone*"
          />

          <textarea
            required
            message
            ngModel
            #message="ngModel"
            rows="8"
            cols="28"
            type="textArea"
            name="message"
            id="message"
            placeholder="Votre message*"
          ></textarea>
          <div class="button">
            <button
              [ngClass]="{ 'disabled-btn': form.invalid }"
              class="btn"
              [disabled]="form.invalid"
            >
              Envoyer le formulaire
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ["./contact-page-information.css"],
})
export class ContactPageInformationComponent {
  @ViewChild("email")
  emailInput?: ElementRef<HTMLInputElement>;

  onSubmit(form: NgForm) {
    console.log(form);
  }
}

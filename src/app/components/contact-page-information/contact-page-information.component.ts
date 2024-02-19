import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FormContact } from "src/app/services/models/formContact";
import { FormContactService } from "src/app/services/form-contact.service";
import { Car } from "src/app/services/models/car";
import { MessageService } from "src/app/services/contactMessage.service";

@Component({
  selector: "app-contact-page-information",
  template: `
    <div class="container">
      <div class="title">
        <h2>DEMANDE D'INFORMATIONS</h2>

        <div *ngIf="carByID" class="test">
          {{ carByID.brand }}
        </div>
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

            <p
              class="invalid-feedback"
              *ngIf="name.touched && name.hasError('pattern')"
            >
              Le nom n'est pas conforme
            </p>

            <span
              class="invalid-feedback"
              *ngIf="firstName.touched && firstName.hasError('required')"
            >
              Le prénom est obligatoire
            </span>

            <span
              class="invalid-feedback"
              *ngIf="adress.touched && adress.hasError('pattern')"
            >
              L'adresse n'est pas conforme
            </span>
            <span
              class="invalid-feedback"
              *ngIf="adress.touched && adress.hasError('required')"
            >
              L'adresse mail est obligatoire
            </span>

            <span
              class="invalid-feedback"
              *ngIf="firstName.touched && firstName.hasError('pattern')"
            >
              Le prénom n'est pas conforme
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
            <span
              class="invalid-feedback"
              *ngIf="email.touched && email.hasError('pattern')"
            >
              L'adresse mail n'est pas conforme
            </span>
            <p class="invalid-feedback" *ngIf="phone.touched && phone.invalid">
              Le numéro de téléphone est obligatoire et doit contenir 10
              chiffres
            </p>
            <p
              class="invalid-feedback"
              *ngIf="phone.touched && phone.hasError('pattern')"
            >
              Le numéro de téléphone n'est pas conforme
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
            name="name"
            id="name"
            placeholder="Nom*"
            [pattern]="regexletters"
          />

          <input
            required
            firstName
            ngModel
            #firstName="ngModel"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Prénom*"
            [pattern]="regexletters"
          />

          <input
            required
            adress
            ngModel
            #adress="ngModel"
            type="text"
            name="adress"
            id="adress"
            placeholder="Adresse*"
            [pattern]="regexlettersAndNumbers"
          />

          <input
            required
            email
            ngModel
            #email="ngModel"
            type="Email"
            name="email"
            id="email"
            placeholder="Email*"
            [pattern]="regexEmail"
          />

          <input
            required
            phone
            ngModel
            #phone="ngModel"
            type="phone"
            pattern="[0-9]{10}"
            name="phone"
            id="phone"
            placeholder="téléphone*"
            [pattern]="regexPhone"
          />

          <textarea
            required
            message
            ngModel="{{ carMessage }}"
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
              type="submit"
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
    <div class="backHome">
      <a (click)="navigateToHome()">
        <span class="material-symbols-outlined"> home </span>
      </a>
    </div>
  `,
  styleUrls: ["./contact-page-information.css"],
})
export class ContactPageInformationComponent implements OnInit {
  regexletters: string = "^[A-Za-zéèÉÈ\\- ]+$";
  regexlettersAndNumbers: string = "^[A-Za-z0-9-zéèÉÈ\\- ]+$";
  regexPhone: string = "^0[1-9]([-. ]?[0-9]{2}){4}$";
  regexEmail: string = "([A-Za-z]|[^s@]){4,}@([A-Za-z]|[^s@]){2,}.(com|net|fr)";
  carMessage: string;

  constructor(
    private formContactService: FormContactService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  formData: FormContact[] = [];
  carByID: Car;
  carBrand: string;
  carModel: string;
  carPrice: number;
  carYear: number;
  message: string = "vous voulez des informations concernant la ";

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      (this.carBrand = params["carBrand"]),
        (this.carModel = params["carModel"]),
        (this.carYear = params["year"] ? params["year"].toString() : ""),
        (this.carPrice = params["price"] ? params["price"].toString() : "");

      if (this.carBrand && this.carModel && this.carYear && this.carPrice) {
        this.carMessage = this.messageService.CarMessage(
          this.carBrand,
          this.carModel,
          this.carYear,
          this.carPrice
        );
      }
    });
  }

  @ViewChild("email")
  emailInput?: ElementRef<HTMLInputElement>;

  onSubmit(form: NgForm) {
    this.formContactService.addPostForm(form.value).subscribe((FormContact) => {
      this.formData.push(FormContact);
    });
  }

  navigateToHome() {
    this.router.navigate(["/"]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}

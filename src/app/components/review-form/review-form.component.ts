import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-review-form",
  template: `
    <div class="formContainer">
      <form #form="ngForm" (submit)="onSubmit(form)" class="form">
        <div class="error">
          <span
            class="invalid-feedback"
            *ngIf="firstName.touched && firstName.hasError('required')"
          >
            Le prénom est obligatoire
          </span>
          <span *ngIf="message.length > 255" class="error-message">
            Le message ne doit pas dépasser 255 caractères.></span
          >
        </div>

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

        <textarea
          required
          [(ngModel)]="message"
          name="message"
          id="message"
          rows="8"
          cols="28"
          type="text"
          maxlength="255"
          placeholder="Votre message*"
        ></textarea>

        <div class="rank">
          <h4>Ajoutez une note</h4>
          <mat-form-field class="matForm">
            <select
              matNativeControl
              required
              [(ngModel)]="rating"
              name="rating"
            >
              <option class="option" value="1">1</option>
              <option class="option" value="2">2</option>
              <option class="option" value="3">3</option>
              <option class="option" value="4">4</option>
              <option class="option" value="4">5</option>
            </select>
          </mat-form-field>
        </div>

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
  `,
  styleUrls: ["review-form.component.css"],
})
export class ReviewFormComponent {
  //longueur string
  message: string = "";
  rating: number;

  onSubmit(form: NgForm) {
    console.log(form);
  }
}

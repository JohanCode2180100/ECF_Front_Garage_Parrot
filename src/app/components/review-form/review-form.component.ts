import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from "src/app/adminComponents/admin-service/Post.service";
import { Review } from "src/app/services/models/review";

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

          <span
            class="invalid-feedback"
            *ngIf="firstName.touched && firstName.hasError('pattern')"
          >
            Le prénom ne doit contenir que des lettres...
          </span>
        </div>

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

        <textarea
          required
          [(ngModel)]="message"
          name="containt"
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
            <select matNativeControl required [(ngModel)]="rating" name="note">
              <option class="option" value="1">1</option>
              <option class="option" value="2">2</option>
              <option class="option" value="3">3</option>
              <option class="option" value="4">4</option>
              <option class="option" value="5">5</option>
            </select>
          </mat-form-field>
        </div>

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
  `,
  styleUrls: ["review-form.component.css"],
})
export class ReviewFormComponent implements OnInit {
  constructor(private PostService: PostsService) {}

  //longueur string
  message: string = "";
  rating: number;
  regexletters: string = "^[A-Za-zéèÉÈ\\- ]+$";

  reviewData: Review[] = [];

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.PostService.addPost(form.value).subscribe((Review) =>
      this.reviewData.push(Review)
    );
  }
}

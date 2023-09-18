import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from "src/app/adminComponents/Post.service";
import { ReviewPost } from "../../adminComponents/review-post.model";
import { Review } from "../review-page/review";
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
          name="FirstName"
          id="firstName"
          placeholder="Prénom*"
        />

        <textarea
          required
          [(ngModel)]="message"
          name="Containt"
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
            <select matNativeControl required [(ngModel)]="rating" name="Rank">
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

  reviewData: ReviewPost[] = [];

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.PostService.addPost(form.value).subscribe((ReviewPost) =>
      this.reviewData.push(ReviewPost)
      
    );
  }
}

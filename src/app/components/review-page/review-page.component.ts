import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReviewService } from "src/app/services/review.service";

@Component({
  selector: "app-review-page",
  template: `
    <div class="container">
      <div class="containerReview" *ngFor="let review of review">
        <mat-card class="example-card">
          <div class="titleCard">
            <mat-card-title>{{ review.prenom }} :<br /> </mat-card-title>
          </div>
          <mat-card-content class="detailsCard">
            <span>{{ review.contenu }}</span
            ><br /><br />
          </mat-card-content>
          <mat-card-content class="titleCard">
            <span>note : {{ review.rank }}</span
            >
          </mat-card-content>
        </mat-card>
      </div>
      <mat-card-actions class="cardAction">
        <button mat-button class="buttonForm" (click)="redirectToReviewForm()">
          PUBLIER UN AVIS
        </button>
      </mat-card-actions>
    </div>
    <div class="backHome">
      <a routerLink="/"
        ><span class="material-symbols-outlined"> home </span></a
      >
    </div>
  `,
  styleUrls: ["./review-page.component.css"],
})
export class ReviewPageComponent implements OnInit {
  review: any[] = [];

  constructor(private reviewService: ReviewService, private router: Router) {}

  ngOnInit() {
    this.getReview();
  }

  private getReview(): void {
    this.reviewService.getReview().subscribe((data) => (this.review = data));
  }

  redirectToReviewForm() {
    this.router.navigate(["reviewForm"]);
  }
}

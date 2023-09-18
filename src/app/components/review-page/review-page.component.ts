import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReviewService } from "src/app/services/review.service";
import { Review } from "./review";


@Component({
  selector: "app-review-page",
  template: `
    <div class="container">
      <div class="containerReview" *ngFor="let review of reviewData">
        <mat-card class="example-card">
          <div class="titleCard">
            <mat-card-title>{{ review.FirstName }} :<br /> </mat-card-title>
          </div>
          <mat-card-content class="detailsCard">
            <span>{{ review.Containt }}</span
            ><br /><br />
          </mat-card-content>
          <mat-card-content class="titleCard">
            <span>note : {{ review.Rank }}</span>
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
  reviewData: Review[];

  constructor(
    private reviewService: ReviewService,
  
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReviewValid();
  }

  getReviewValid() {
    this.reviewService.getReviewValid().subscribe((data: Review[]) => {
      if (data) {
        this.reviewData = data;
        console.log(data);
      } else {
        console.error("Aucune donnée n'a été renvoyée par le service.");
      }
    });
  }



  redirectToReviewForm() {
    this.router.navigate(["reviewForm"]);
  }
}

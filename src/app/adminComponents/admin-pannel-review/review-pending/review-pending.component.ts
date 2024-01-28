import { Component } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { DeleteService } from "../../admin-service/Delete.service";
import { GetService } from "../../admin-service/Get.service";
import { PutService } from "../../admin-service/Put.service";
import { Review } from "src/app/services/models/review";

@Component({
  selector: "app-review-pending",
  template: `
    <mat-tab-group>
      <mat-tab [label]="review.firstName" *ngFor="let review of reviewData"
        >{{ review.containt }} - note : {{ review.note }}
        <mat-chip-option (click)="validReview(review.review_id)"
          >Accepter</mat-chip-option
        >
        <mat-chip-option color="warn" (click)="deleteReview(review.review_id)"
          >Supprimer</mat-chip-option
        ></mat-tab
      >
    </mat-tab-group>
  `,
  styles: [],
})
export class ReviewPendingComponent {
  reviewData: Review[] = [];

  constructor(
    public authService: AuthService,
    private GetService: GetService,
    private deleteService: DeleteService,
    private putService: PutService
  ) {}

  ngOnInit() {
    this.getReviewPending();
  }

  getReviewPending() {
    this.GetService.getReviewPending().subscribe((data: Review[]) => {
      if (data) {
        this.reviewData = data;
      } else {
        console.error("Aucune donnée n'a été renvoyée par le service.");
      }
    });
  }

  validReview(reviewId: number) {
    this.putService.approuvedPendingReviewById(reviewId);
    this.getReviewPending();
  }
  deleteReview(reviewId: number) {
    this.deleteService.reviewDeleteById(reviewId);
    this.getReviewPending();
  }
}

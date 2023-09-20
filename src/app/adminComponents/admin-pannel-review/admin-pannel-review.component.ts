import { Component, OnInit } from "@angular/core";
import { Review } from "../../models/review";
import { GetService } from "../Get.service";
import { AuthService } from "src/app/auth.service";
import { DeleteService } from "../Delete.service";
import { PutService } from "../Put.service";

@Component({
  selector: "app-admin-pannel-review",
  templateUrl: "./admin-pannel-review.component.html",
  styles: [],
})
export class AdminPannelReviewComponent implements OnInit {
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

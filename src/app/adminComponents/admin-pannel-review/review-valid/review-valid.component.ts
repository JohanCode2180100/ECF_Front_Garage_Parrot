import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Review } from "src/app/services/models/review";
import { ReviewService } from "src/app/services/review.service";
import { DeleteService } from "../../admin-service/Delete.service";

@Component({
  selector: "app-review-valid",
  templateUrl: "review-valid.component.html",
  styles: [
    `
      .count {
        text-align: center;
        margin: 40 20px;
        font-size: 1.5rem;
      }
    `,
  ],
})
export class ReviewValidComponent implements OnInit {
  dataSource: Review[] = [];
  dataCount: number;

  message: string = "";
  displayedColumns: string[] = [
    "demo-position",
    "demo-firstName",
    "demo-containt",
    "demo-note",
    "demo-delete",
  ];


  constructor(
    private reviewService: ReviewService,
    public authService: AuthService,
    private deleteService: DeleteService,

  ) {}

  ngOnInit() {
    this.getReviewValid();
    this.countMessage(this.dataCount)
  }

  @Component({
    selector: "table-basic-example",
    styleUrls: ["table-basic-example.css"],
    templateUrl: "table-basic-example.html",
  })
  getReviewValid() {
    this.reviewService.getReviewValid().subscribe((data: Review[]) => {
      if (data) {
        this.dataSource = data;
        this.dataCount = this.dataSource.length;
        this.countMessage(this.dataCount);
      } else {
        console.error("Aucune donnée n'a été renvoyée par le service.");
      }
      return this.dataCount;
    });
  }

  deleteReview(reviewId: number) {
    this.deleteService.reviewDeleteById(reviewId);
    this.getReviewValid();
    this.countMessage(this.dataCount);
  }

  countMessage(dataCount) {
    if (dataCount === 0) {
      const message = "Aucun avis sur le site pour le moment ...";
      this.message = message;
    } else dataCount >= 1;
    const message = `Vous avez ${dataCount} avis sur le site`;
    this.message = message;
  }
}

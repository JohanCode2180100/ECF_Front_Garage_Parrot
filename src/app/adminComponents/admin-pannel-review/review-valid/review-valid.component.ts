import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Review } from "src/app/services/models/review";
import { ReviewService } from "src/app/services/review.service";

@Component({
  selector: "app-review-valid",
  templateUrl: "review-valid.component.html",
  styles: [],
})
export class ReviewValidComponent implements OnInit {
  dataSource: Review[] = [];
  displayedColumns: string[] = [
    "demo-position",
    "demo-firstName",
    "demo-containt",
    "demo-note",
  ];

  constructor(
    private reviewService: ReviewService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.getReviewValid();
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
      } else {
        console.error("Aucune donnée n'a été renvoyée par le service.");
      }
    });
  }
}

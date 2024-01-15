import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from "../admin-service/Post.service";
import { Car } from "../../models/car";

@Component({
  selector: "app-admin-pannel-second-hand-car",
  templateUrl: "./admin-pannel-second-hand-car.component.html",
  styleUrls: ["./admin-pannel-second-hand-car.component.css"],
})
export class AdminPannelSecondHandCarComponent implements OnInit {
  carData: Car[] = [];
  path = "";
  picture: string = "";

  imageUrl: any;

  constructor(public PostService: PostsService) {}
  ngOnInit() {}

  onPostCar(postForm: NgForm) {
    this.PostService.addCar(postForm.value).subscribe((Car) => {
      this.carData.push(Car);
    });
  }

}

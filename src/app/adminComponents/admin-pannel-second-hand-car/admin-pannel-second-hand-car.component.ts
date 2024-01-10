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
  minlength: 2;

  constructor(public PostService: PostsService) {}
  ngOnInit() {}

  onPostCar(postForm: NgForm) {
    this.PostService.addCar(postForm.value).subscribe((Car) => {
      this.carData.push(Car);
    });
  }

  // onImagePicked(event: Event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({ image: file });
  //   this.form.get("image").updateValueAndValidity();
  //   console.log(file);
  //   console.log(this.form.value);
  // }
}

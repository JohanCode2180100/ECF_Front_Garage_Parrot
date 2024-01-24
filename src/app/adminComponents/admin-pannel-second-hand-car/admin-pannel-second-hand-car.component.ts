import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PostsService } from "../admin-service/Post.service";
import { Car } from "../../services/models/car";
import { mimeType } from "../admin-pannel-second-hand-car/mime-type.validator";

@Component({
  selector: "app-admin-pannel-second-hand-car",
  templateUrl: "./admin-pannel-second-hand-car.component.html",
  styleUrls: ["./admin-pannel-second-hand-car.component.css"],
})
export class AdminPannelSecondHandCarComponent implements OnInit {
  car: Car;
  form: FormGroup;

  imagePreview: string;

  constructor(public PostService: PostsService) {}

  ngOnInit() {
    this.form = new FormGroup({
      brand: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(2)],
      }),
      model: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)],
      }),
      year: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(4)],
      }),
      price: new FormControl(null, {
        validators: [Validators.required],
      }),
      kilometer: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(6)],
      }),
      description: new FormControl(null, {
        validators: [Validators.required],
      }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });
  }

  get brand() {
    return this.form.controls["brand"];
  }
  get model() {
    return this.form.controls["model"];
  }
  get year() {
    return this.form.controls["year"];
  }
  get price() {
    return this.form.controls["price"];
  }
  get kilometer() {
    return this.form.controls["kilometer"];
  }
  get description() {
    return this.form.controls["description"];
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onPostCar() {
    this.PostService.addCar(this.form).subscribe((car) => {
      this.car = car;
      console.log(car);
    });
    this.form.reset();
  }
}

import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PostsService } from "../admin-service/Post.service";
import { Car } from "../../models/car";
import { mimeType } from "../admin-pannel-second-hand-car/mime-type.validator";

@Component({
  selector: "app-admin-pannel-second-hand-car",
  templateUrl: "./admin-pannel-second-hand-car.component.html",
  styleUrls: ["./admin-pannel-second-hand-car.component.css"],
})
export class AdminPannelSecondHandCarComponent implements OnInit {
  Car: Car;
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
      filePicture: new FormControl(null, {
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
  get filePicture() {
    return this.form.controls["filePicture"];
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onPostCar() {
    throw new Error("Method not implemented.");
  }

  onImagePicked(event: Event) {
    const picture = event.target as HTMLInputElement;

    if (picture.files && picture.files.length > 0) {
      const file = picture.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // onPostCar() {
  //   if (this.form.invalid) {
  //     return;
  //   }
  //   this.PostService.addCar(this.Car).subscribe((Car) => {
  //     this.Care.push(Car);
  //   });
  //   this.form.reset();
  // }
}

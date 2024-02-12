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
  car: Car[] = [];
  form: FormGroup;
  defaultPath: string = "";
  imagePreview: string;
  regexletters: string = "^[A-Za-z]+$";
  regexlettersAndNumbers: string = "^[A-Za-z0-9]+$";
  regexNumbers: string = "^[0-9]+$";
  regexText: string = "^[A-Za-z0-9() -]+$";
  constructor(public PostService: PostsService) {}

  ngOnInit() {
    this.form = new FormGroup({
      brand: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(this.regexletters),
        ],
      }),
      model: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(this.regexlettersAndNumbers),
        ],
      }),
      year: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4),
          Validators.pattern(this.regexNumbers),
        ],
      }),
      price: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern(this.regexNumbers),
        ],
      }),
      kilometer: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.maxLength(6),
          Validators.pattern(this.regexNumbers),
        ],
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
    if (this.form.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append("brand", this.form.value.brand);
    formData.append("model", this.form.value.model);
    formData.append("year", this.form.value.year);
    formData.append("price", this.form.value.price);
    formData.append("kilometer", this.form.value.kilometer);
    formData.append("description", this.form.value.description);
    formData.append("image", this.form.value.image);

    this.PostService.addCar(formData).subscribe((car) => {
      this.car.push(car);
      console.log(this.car);
    });
    this.form.reset();
  }
}

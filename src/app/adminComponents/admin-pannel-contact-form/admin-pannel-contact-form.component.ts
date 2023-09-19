import { Component, OnInit } from "@angular/core";
import { GetService } from "../Get.service";
import { FormContact } from "../models/formContact";

@Component({
  selector: "app-admin-pannel-contact-form",
  templateUrl: "./admin-pannel-contact-form.component.html",
  styles: [],
})
export class AdminPannelContactFormComponent implements OnInit {
  formData: FormContact[] = [];

  constructor(private getService: GetService) {}

  ngOnInit() {
    this.getFormContact();
  }

  //READ PANNEL CONTACT
  getFormContact() {
    this.getService.getFormContact().subscribe((data: FormContact[]) => {
      if (data) {
        this.formData = data;
      } else {
        console.error("Aucune donnée n'a été renvoyée par le service.");
      }
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { GetService } from "../Get.service";
import { FormContact } from "../../models/formContact";
import { DeleteService } from "../Delete.service";

@Component({
  selector: "app-admin-pannel-contact-form",
  templateUrl: "./admin-pannel-contact-form.component.html",
  styleUrls: ["./admin-pannel-contact-form.component.css"],
})
export class AdminPannelContactFormComponent implements OnInit {
  formData: FormContact[] = [];

  constructor(
    private getService: GetService,
    private deleteService: DeleteService
  ) {}

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
  onDelete(FormId: number) {
    this.deleteService.formDeleteById(FormId);
    this.getFormContact();
  }
}

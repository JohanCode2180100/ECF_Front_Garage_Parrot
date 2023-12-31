import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecondHandCarComponent } from "./components/second-hand-car/second-hand-car/second-hand-car.component";

import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ContactPageInformationComponent } from "./components/contact-page-information/contact-page-information.component";
import { ReviewPageComponent } from "./components/review-page/review-page.component";
import { ReviewFormComponent } from "./components/review-form/review-form.component";
import { LoginComponent } from "./login/login.component";
import { AdminDashboardComponent } from "./adminComponents/admin-dashboard/admin-dashboard.component";
import { AdminGuard } from "src/guard/Admin.guard";
import { AdminPannelContactFormComponent } from "./adminComponents/admin-pannel-contact-form/admin-pannel-contact-form.component";
import { AdminPannelReviewComponent } from "./adminComponents/admin-pannel-review/admin-pannel-review.component";
import { AdminPannelSecondHandCarComponent } from "./adminComponents/admin-pannel-second-hand-car/admin-pannel-second-hand-car.component";
import { AdminPannelSectionComponent } from "./adminComponents/admin-pannel-section/admin-pannel-section.component";
import { AdminPannelOpeningHoursComponent } from "./adminComponents/admin-pannel-opening-hours/admin-pannel-opening-hours.component";
import { AdminPannelImageComponent } from "./adminComponents/admin-pannel-image/admin-pannel-image.component";
import { AdminPannelHomePageComponent } from "./adminComponents/admin-pannel-home-page/admin-pannel-home-page.component";
import { CarDetailComponent } from "./components/second-hand-car-detail/second-hand-car-detail.component";

const routes: Routes = [
  { path: "second-hand-car", component: SecondHandCarComponent },
  { path: "second-hand-car/:id", component: CarDetailComponent },
  { path: "contact", component: ContactPageInformationComponent },
  {
    path: "avis",
    component: ReviewPageComponent,
  },
  { path: "reviewForm", component: ReviewFormComponent },
  { path: "login", component: LoginComponent },
  {
    path: "adminPannel",
    canActivate: [AdminGuard],

    component: AdminDashboardComponent,

    children: [
      { path: "adminPannel_review", component: AdminPannelReviewComponent },
      {
        path: "adminPannel_second-hand-car",
        component: AdminPannelSecondHandCarComponent,
      },
      { path: "adminPannel_HomePage", component: AdminPannelHomePageComponent },
      { path: "admin_panel_section", component: AdminPannelSectionComponent },
      {
        path: "admin_pannel_contact_form",
        component: AdminPannelContactFormComponent,
      },
      {
        path: "adminPannel_opening_hours",
        component: AdminPannelOpeningHoursComponent,
      },
      { path: "adminPannel_image", component: AdminPannelImageComponent },
      {
        path: "adminPannel_car_contact_form",
        component: AdminPannelContactFormComponent,
      },
    ],
  },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

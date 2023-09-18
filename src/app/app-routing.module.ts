import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecondHandCarComponent } from "./components/second-hand-car/second-hand-car/second-hand-car.component";
import { SecondHandCarDetailsComponent } from "./components/second-hand-car-details/second-hand-car-details.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ContactPageInformationComponent } from "./components/contact-page-information/contact-page-information.component";
import { ReviewPageComponent } from "./components/review-page/review-page.component";
import { ReviewFormComponent } from "./components/review-form/review-form.component";
import { LoginComponent } from "./login/login.component";
import { AdminDashboardComponent } from "./adminComponents/admin-dashboard/admin-dashboard.component";
import { AdminGuard } from "src/guard/Admin.guard";

const routes: Routes = [
  { path: "second-hand-car", component: SecondHandCarComponent },
  { path: "second-hand-car/:id", component: SecondHandCarDetailsComponent },
  { path: "contact", component: ContactPageInformationComponent },
  {
    path: "avis",
    component: ReviewPageComponent,
  },
  { path: "reviewForm", component: ReviewFormComponent },
  { path: "login", component: LoginComponent },
  {
    path: "adminPannel",
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
  },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

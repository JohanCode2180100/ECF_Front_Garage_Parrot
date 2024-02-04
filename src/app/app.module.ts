import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BurgerMenuComponent } from "./components/burger-menu/burger-menu.component";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SectionOneCarouselComponent } from "./components/section-one/carousel/carousel.component";
import { sectionOneContainComponent } from "./components/section-one/contain/contain.component";
import { ServicesCardsComponent } from "./components/section-two/services-cards/services-cards.component";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatInputModule } from "@angular/material/input";
import { SectionThreeComponent } from "./components/section-three/section-three.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HoursComponent } from "./components/hours/hours.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HoursServiceService } from "./services/hours-service.service";
import { SecondHandCarComponent } from "./components/second-hand-car/second-hand-car/second-hand-car.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { CarCardComponent } from "./components/car-card/car-card.component";
import { carsService } from "./services/cars.service";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ContactPageInformationComponent } from "./components/contact-page-information/contact-page-information.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReviewPageComponent } from "./components/review-page/review-page.component";
import { ReviewFormComponent } from "./components/review-form/review-form.component";
import { LoginComponent } from "./login/login.component";
import { AdminDashboardComponent } from "./adminComponents/admin-dashboard/admin-dashboard.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { AuthInterceptor } from "./auth-interceptor";
import { AdminPannelSecondHandCarComponent } from "./adminComponents/admin-pannel-second-hand-car/admin-pannel-second-hand-car.component";
import { AdminPannelHomePageComponent } from "./adminComponents/admin-pannel-home-page/admin-pannel-home-page.component";
import { AdminPannelSectionComponent } from "./adminComponents/admin-pannel-section/admin-pannel-section.component";
import { AdminPannelContactFormComponent } from "./adminComponents/admin-pannel-contact-form/admin-pannel-contact-form.component";
import { AdminPannelOpeningHoursComponent } from "./adminComponents/admin-pannel-opening-hours/admin-pannel-opening-hours.component";
import { AdminPannelImageComponent } from "./adminComponents/admin-pannel-image/admin-pannel-image.component";
import { AdminPannelReviewComponent } from "./adminComponents/admin-pannel-review/admin-pannel-review.component";
import { CarDetailComponent } from "./components/second-hand-car-detail/second-hand-car-detail.component";
import { FilterCarsComponent } from "./components/filter-cars/filter-cars.component";
import { ImageViewComponent } from "./adminComponents/image-view/image-view.component";

import { ReviewValidComponent } from "./adminComponents/admin-pannel-review/review-valid/review-valid.component";
import { ReviewPendingComponent } from "./adminComponents/admin-pannel-review/review-pending/review-pending.component";

import { HomePageIdComponent } from "./adminComponents/admin-pannel-home-page/home-page-id/home-page-id.component";
import { RegisterComponent } from "./adminComponents/auth/register/register.component";

import { AdminHoursIdComponent } from "./adminComponents/admin-pannel-opening-hours/admin-hours-id/admin-hours-id.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerMenuComponent,
    SectionOneCarouselComponent,
    sectionOneContainComponent,
    ServicesCardsComponent,
    SectionThreeComponent,
    FooterComponent,
    HoursComponent,
    SecondHandCarComponent,
    CarDetailComponent,
    HomeComponent,
    CarCardComponent,
    PageNotFoundComponent,
    ContactPageInformationComponent,
    ReviewPageComponent,
    ReviewFormComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminPannelReviewComponent,
    AdminPannelSecondHandCarComponent,
    AdminPannelHomePageComponent,
    AdminPannelSectionComponent,
    AdminPannelContactFormComponent,
    AdminPannelOpeningHoursComponent,
    AdminPannelImageComponent,
    FilterCarsComponent,
    ImageViewComponent,
    ReviewValidComponent,
    ReviewPendingComponent,
    HomePageIdComponent,
    RegisterComponent,
    AdminHoursIdComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatChipsModule,

    MatProgressSpinnerModule,
    MatTabsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatAutocompleteModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    HoursServiceService,
    carsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

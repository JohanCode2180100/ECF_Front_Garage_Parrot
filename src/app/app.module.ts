import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BurgerMenuComponent } from "./components/burger-menu/burger-menu.component";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SectionOneCarouselComponent } from "./components/section-one/carousel/carousel.component";
import { sectionOneContainComponent } from "./components/section-one/contain/contain.component";
import { ServicesCardsComponent } from "./components/section-two/services-cards/services-cards.component";
import { MatCardModule } from "@angular/material/card";
import { SectionThreeComponent } from "./components/section-three/section-three.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HoursComponent } from "./components/hours/hours.component";
import { HttpClientModule } from "@angular/common/http";
import { HoursServiceService } from "./services/hours-service.service";
import { SecondHandCarComponent } from "./components/second-hand-car/second-hand-car/second-hand-car.component";
import { SecondHandCarDetailsComponent } from "./components/second-hand-car-details/second-hand-car-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { CarCardComponent } from "./components/car-card/car-card.component";
import { carsService } from "./services/cars.service";

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
    SecondHandCarDetailsComponent,
    HomeComponent,
    CarCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [HoursServiceService, carsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

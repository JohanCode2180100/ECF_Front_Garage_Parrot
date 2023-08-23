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
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [HoursServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BurgerMenuComponent } from "./components/burger-menu/burger-menu.component";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SectionOneCarouselComponent } from "./components/section-one/carousel/carousel.component";
import { sectionOneContainComponent } from "./components/section-one/contain/contain.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerMenuComponent,
    SectionOneCarouselComponent,
    sectionOneContainComponent,
  ],
  imports: [BrowserModule, MatIconModule, MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

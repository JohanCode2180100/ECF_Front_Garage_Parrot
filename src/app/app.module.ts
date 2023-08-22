import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BurgerMenuComponent } from "./components/burger-menu/burger-menu.component";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [AppComponent, HeaderComponent, BurgerMenuComponent],
  imports: [BrowserModule, MatIconModule, MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

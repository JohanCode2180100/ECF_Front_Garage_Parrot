import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

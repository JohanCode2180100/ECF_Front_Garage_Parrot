import { Component} from "@angular/core";

@Component({
  selector: "app-burger-menu",
  templateUrl: "./burger-menu.component.html",
  styleUrls: ["./burger-menu.component.css"],
})
export class BurgerMenuComponent {
  isMenuOpen = false;
  isButtonVisible = true;



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isButtonVisible = false;
  }
  closeMenu() {
    this.isMenuOpen = false;
    this.isButtonVisible = true;
  }
  
}

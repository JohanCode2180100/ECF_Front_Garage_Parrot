import { Component } from "@angular/core";

@Component({
  selector: "app-carousel",
  template: `
    <div class="picture">
      <img [src]="pictures" alt="images de mécanique voiture" />
    </div>
  `,
  styleUrls: ["./carousel.component.css"],
})
export class SectionOneCarouselComponent {
  pictures: string[] = ["assets/picture/carEngine.jpeg"];
}

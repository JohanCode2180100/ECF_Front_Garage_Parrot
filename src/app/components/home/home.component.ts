import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <main>
  <section class="section1">
    <app-carousel class="carousel"></app-carousel>
    <app-contain class="contain"></app-contain>
  </section>
  <section class="section2">
    <app-services-cards></app-services-cards>
  </section>
  <section class="section3">
    <app-section-three></app-section-three>
  </section>
</main>
  `,
  styles: [
  ]
})
export class HomeComponent {

}

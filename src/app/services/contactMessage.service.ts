import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor() {}

  CarMessage(
    brand: string,
    model: string,
    year: number,
    price: number
  ): string {
    return `Bonjour \n Je souhaiterais des informations concernant le véhicule 
    ${brand} ${model}, année de mise en circulation ( ${year} ) au prix de 
    ${price} EUR ! \n `;
  }
}

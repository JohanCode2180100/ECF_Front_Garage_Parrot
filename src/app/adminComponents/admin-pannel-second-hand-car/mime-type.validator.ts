import { AbstractControl } from "@angular/forms";
import { Observable, Observer } from "rxjs";

export const mimeType = (
  control: AbstractControl
): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
  const file = control.value as File;

  // Vérification si fichier et Blob
  if (file && file instanceof Blob) {
    const fileReader = new FileReader();
    let isValid = false;

    const frObs = new Observable(
      (observer: Observer<{ [key: string]: any }>) => {
        fileReader.addEventListener("loadend", () => {
          const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(
            0,
            4
          );
          let header = "";
          for (let i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }

          switch (header) {
            case "89504e47":
              isValid = true;
              break;
            case "ffd8ffe0":
            case "ffd8ffe1":
            case "ffd8ffe2":
            case "ffd8ffe3":
            case "ffd8ffe8":
              isValid = true;
              break;
            default:
              isValid = false;
              break;
          }

          if (isValid) {
            observer.next(null);
          } else {
            observer.next({ invalidMimeType: true });
          }
          observer.complete();
        });

        fileReader.readAsArrayBuffer(file);
      }
    );

    return frObs;
  } else {
    // Retourner observable avec erreur si pas blob
    return new Observable((observer: Observer<{ [key: string]: any }>) => {
      observer.next({ invalidMimeType: true });
      observer.complete();
    });
  }
};

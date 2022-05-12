import { AbstractControl } from '@angular/forms';

export function ValidateName(control: AbstractControl) {
const nombres = ['Laya', 'K-Naina', 'Verdejo','Monastrell'];

if (nombres.indexOf(control.value)==-1) {
    return { invalidName: true };
  }
  return null;
}
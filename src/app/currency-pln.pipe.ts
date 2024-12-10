import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPln',
  standalone: true,
  pure: true
})
export class CurrencyPlnPipe implements PipeTransform {

  transform(value: number, precision: number = 2): string {
    if (value == null) {
      return '';
    }
    
    const currency = value.toFixed(precision).replace('.', ',');

    return `${currency} zł`;
  }

}

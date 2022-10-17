import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logo'
})
export class LogoPipe implements PipeTransform {
  transform(value: string): string {
    value = value.toUpperCase();
    const companyName = value.split(' ');
    const logo = companyName[0].charAt(0) + companyName[1].charAt(0);
    return logo;
  }
}

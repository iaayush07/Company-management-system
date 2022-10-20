import { Pipe, PipeTransform } from '@angular/core';
import { company } from 'src/app/company/model/company.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(companyData: company[], searchTxt: string): company[] {
    // return companyData.filter(getData);
    // function getData(value: any, index: any) {
    if (!companyData || !searchTxt) {
      return companyData;
    }
    return companyData.filter((item) =>
      item.companyName?.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()) ||
      item.companyDescription?.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()))
  }
}



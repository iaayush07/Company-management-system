import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { company } from '../model/company.model';
import { CompanyService } from './company.service';

@Injectable()

export class CompanyResolver implements Resolve<company> {

  constructor(private companyService: CompanyService) {

  }
  resolve(actroute: ActivatedRouteSnapshot): Observable<company> {
    let companyId = actroute.params['id'];
    return this.companyService.getById(companyId);
  }
}

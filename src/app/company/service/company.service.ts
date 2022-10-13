import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { company } from '../model/company.model';

@Injectable()
export class CompanyService {

  public baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/company/";
  }

  //for getting data from db
  getCompanyData(): Observable<company[]> {
    const url: string = this.baseUrl;
    return this.http.get<company[]>(url)
  }

  //for adding data
  addCompanyData(company: company): Observable<company> {
    const url: string = this.baseUrl;
    return this.http.post<company>(url, company)
  }
}

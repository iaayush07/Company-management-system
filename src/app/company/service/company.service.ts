import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { company } from '../model/company.model';

@Injectable()
export class CompanyService {

  //url of db.json
  public baseUrl: any;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/company/";
  }

  //for getting data from db
  getCompanyData(): Observable<company[]> {
    const url: string = this.baseUrl;
    return this.http.get<company[]>(url)
  }

  /**
   * add data in database
   * @param company 
   * @returns company
   */
  addCompanyData(company: company): Observable<company> {
    const url: string = this.baseUrl;
    return this.http.post<company>(url, company);
  }

  /**
   * delete data from database
   * @param id number
   * @returns company
   */
  deleteData(id: number): Observable<company> {
    const url: string = this.baseUrl + id;
    return this.http.delete<company>(url);
  }

  /**
   * get id for editing data
   * @param id 
   * @returns id
   */
  getById(id: number): Observable<company> {
    const url: string = this.baseUrl + id;
    return this.http.get<company>(url);
  }

  /**
   * for updating data
   * @param company 
   * @param id 
   * @returns updated company
   */
  updateData(company: company, id: number): Observable<company> {
    const url: string = this.baseUrl + id;
    return this.http.put<company>(url, company)
  }
}

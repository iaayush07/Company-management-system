import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { company } from '../model/company.model';

@Injectable()
export class SiblingCommunicationService {

  public subjectData$: Observable<company>;
  private subjectData: Subject<company>;

  constructor() {
    this.subjectData = new Subject();
    this.subjectData$ = this.subjectData.asObservable();
  }

  getData(company: company) {
    this.subjectData.next(company);
  }
}

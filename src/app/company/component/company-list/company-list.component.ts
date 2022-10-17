import { Component, OnInit } from '@angular/core';
import { company } from '../../model/company.model';
import { CompanyService } from '../../service/company.service';
import { SiblingCommunicationService } from '../../service/sibling-communication.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  //store model data in companydata
  public companyData: company[]

  //
  public serchBoxText: string;

  constructor(
    private companyService: CompanyService,
    private sblService: SiblingCommunicationService
  ) {
    this.companyData = [];
    this.serchBoxText = ''
  }

  ngOnInit(): void {
    //using subject 
    this.sblService.subjectData$.subscribe((res: any) => {
      if (res) {
        this.getCompanyData();
      }
    })
    this.getCompanyData();
  }


  //for getting data from database
  getCompanyData() {
    this.companyService.getCompanyData().subscribe((res: company[]) => {
      this.companyData = res
    })
  }

  //for deleting data from list
  deleteData(id: any) {
    this.companyService.deleteData(Number(id)).subscribe(res => {
      this.getCompanyData();
    })
  }

}

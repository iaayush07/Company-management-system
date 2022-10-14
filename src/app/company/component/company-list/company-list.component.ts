import { Component, OnInit } from '@angular/core';
import { company } from '../../model/company.model';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  //store model data in companydata
  public companyData: company[]

  constructor(
    private companyService: CompanyService
  ) {
    this.companyData = [];
  }

  ngOnInit(): void {
    this.getCompanyData();
  }

  //for getting data from database
  getCompanyData() {
    this.companyService.getCompanyData().subscribe(res => {
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

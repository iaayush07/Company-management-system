import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/core/service/breadcrumb.service';
import { company } from '../../model/company.model';
import { CompanyService } from '../../service/company.service';
import { NotificationService } from '../../service/notification.service';
import { SiblingCommunicationService } from '../../service/sibling-communication.service';
//----------------------------------
import { Dialog } from '@angular/cdk/dialog';
import { DynamicDeleteComponent } from '../dynamic-delete/dynamic-delete.component';

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
    private sblService: SiblingCommunicationService,
    private notificationService: NotificationService,
    private bcService: BreadcrumbService
  ) {
    this.companyData = [];
    this.serchBoxText = ''
  }

  ngOnInit(): void {
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

  /**
   * delete data 
   * @param id 
   * return company
   */
  deleteData(id: any) {
    confirm('Are you sure you want to delete?')
    this.companyService.deleteData(Number(id)).subscribe(res => {
      this.getCompanyData();
    })
    this.notificationService.ShowDelete()
  }

  //breadcrumb route
  bcRoute() {
    this.bcService.breadcrumb.next('add')
  }
  bcEditRoute(companyName: string) {
    this.bcService.breadcrumb.next(companyName)
  }

}

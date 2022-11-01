import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './component/company-list/company-list.component';
import { CompanyFormComponent } from './component/company-form/company-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './service/company.service';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SiblingCommunicationService } from './service/sibling-communication.service';
import { BreadcrumbModule } from 'xng-breadcrumb';
<<<<<<< HEAD
import { OverlayModule } from '@angular/cdk/overlay';
import { DynamicDeleteComponent } from './component/dynamic-delete/dynamic-delete.component';
=======
import { CompanyResolver } from './service/company.resolver';
import { NotificationService } from './service/notification.service';
>>>>>>> f93db42aa10c6eb38e0981126187044cc37b5893
// import { CompanyPipe } from '../shared/pipe/company.pipe';++



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyFormComponent,
    DynamicDeleteComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    OverlayModule
    // SharedModule
  ],
  providers: [
    CompanyService,
    SiblingCommunicationService,
    CompanyResolver,
    NotificationService
    // CompanyPipe
  ]
})
export class CompanyModule { }

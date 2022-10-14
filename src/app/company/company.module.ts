import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './component/company-list/company-list.component';
import { CompanyFormComponent } from './component/company-form/company-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './service/company.service';
import { SharedModule } from '../shared/shared.module';
// import { CompanyPipe } from '../shared/pipe/company.pipe';++



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyFormComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
    // SharedModule
  ],
  providers: [
    CompanyService,
    // CompanyPipe
  ]
})
export class CompanyModule { }

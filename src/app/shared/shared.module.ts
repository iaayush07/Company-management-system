import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoPipe } from './pipe/logo.pipe';
// import { CompanyPipe } from './pipe/company.pipe';

@NgModule({
  declarations: [
    // CompanyPipe

    LogoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoPipe
  ]
})
export class SharedModule { }

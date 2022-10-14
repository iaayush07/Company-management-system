import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoPipe } from './pipe/logo.pipe';
import { SearchPipe } from './pipe/search.pipe';
// import { CompanyPipe } from './pipe/company.pipe';

@NgModule({
  declarations: [
    LogoPipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoPipe,
    SearchPipe
  ]
})
export class SharedModule { }

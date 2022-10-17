import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './component/company-form/company-form.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'add'
      },
      {
        path: 'add',
        component: CompanyFormComponent,
        data: { breadcrumb: { alias: 'Add' } }
      },
      {
        path: 'edit/:id',
        component: CompanyFormComponent,
        data: { breadcrumb: { alias: 'Edit' } }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

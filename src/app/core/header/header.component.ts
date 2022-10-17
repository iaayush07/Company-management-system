import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private bcService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.bcService.set('@company', 'company')
  }

}

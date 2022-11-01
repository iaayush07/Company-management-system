import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/core/service/breadcrumb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public breadcrumbName!: string;

  constructor(
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumb.subscribe(res => {
      this.breadcrumbName = res;
    })
  }

}

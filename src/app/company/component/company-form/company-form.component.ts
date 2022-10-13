import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  // companyform
  public companyForm: FormGroup;

  //for validation on submit 
  public isSubmitted: boolean

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService
  ) {

    //formbuilder
    this.companyForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      companyDescription: ['', [Validators.required]],
      selectTags: ['', [Validators.required]],
      file: ['',],//[Validators.required]
    })

    //issubmit
    this.isSubmitted = false
  }

  //getter function for validation
  get f(): { [key: string]: AbstractControl; } {
    return this.companyForm.controls;
  }
  //ngoninit
  ngOnInit(): void {
  }
  //save 
  onSave() {
    this.isSubmitted = true;

    // getdata from service--
    // this.companyService.addCompanyData(this.companyForm.value).subscribe(=>)
  }

}

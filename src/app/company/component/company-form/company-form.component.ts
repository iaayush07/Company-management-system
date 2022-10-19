import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { company } from '../../model/company.model';
import { CompanyService } from '../../service/company.service';
import { SiblingCommunicationService } from '../../service/sibling-communication.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  //for add and edit title and button
  public title: string;
  // companyform
  public companyForm: FormGroup;

  //for validation on submit 
  public isSubmitted: boolean

  //for getting data through id comming from list
  public id: any;

  //for storing company data 
  public companyList: company[]

  //tags declaration
  fields = [
    { id: 1, name: 'Frontend' },
    { id: 2, name: 'Backend' },
    { id: 4, name: 'QA' },
    { id: 5, name: 'BA' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private actRoute: ActivatedRoute,
    private sblService: SiblingCommunicationService
  ) {
    //title
    this.title = 'Add'

    //formbuilder
    this.companyForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      companyDescription: ['', [Validators.required]],
      selectTags: ['', [Validators.required]],
      file: ['',],//[Validators.required]
    })

    //issubmit
    this.isSubmitted = false

    // /for getting data through id 
    this.actRoute.params.subscribe(res => {
      this.id = res['id'];

      //getting data through id
      // this.getID();
    })
    //initializing company
    this.companyList = []
  }

  //getter function for validation
  get f(): { [key: string]: AbstractControl; } {
    return this.companyForm.controls;
  }
  //ngoninit
  ngOnInit(): void {
    this.title = this.id ? 'Edit' : 'Add';

    this.actRoute.data.subscribe((data: any) => {
      this.companyForm.patchValue(data['company'])
    })
  }
  //save 
  onSave() {
    this.isSubmitted = true;
    if (this.companyForm.valid) {
      if (this.id) {
        this.updateData();
      } else {
        this.addCompanyData();
      }
    }
  }

  addCompanyData() {
    // getdata from service--
    this.companyService.addCompanyData(this.companyForm.value).subscribe(res => {
      this.sblService.getData(res);
      this.reset();
    })
  }

  //for reset  
  reset() {
    this.companyForm.reset();
  }

  //for getting id 
  // getID() {
  //   this.companyService.getById(Number(this.id)).subscribe((res: company) => {
  //     this.companyForm.patchValue(res);
  //   })
  // }
  //for updating form 
  updateData() {
    this.companyService.updateData(this.companyForm.value, Number(this.id)).subscribe(res => {
      this.sblService.getData(res);
    })
  }
  //get data 
  getData() {
    this.companyService.getCompanyData().subscribe(res => {
      this.companyList = res;
    })
  }

}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Data Added Succesfully!', 'Added Data');
  }

  ShowDelete() {
    this.toastr.error('Data Deleted Successfully', 'Deleted Data');
  }
}

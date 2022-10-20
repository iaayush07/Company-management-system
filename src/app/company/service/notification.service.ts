import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  /**
   * for showing data added successfully
   */
  showSuccess() {
    this.toastr.success('Data Added Succesfully!', 'Added Data');
  }

  /**
   * for showing data deleted
   */
  ShowDelete() {
    this.toastr.error('Data Deleted Successfully', 'Deleted Data');
  }
}

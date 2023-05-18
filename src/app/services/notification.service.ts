import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  toasterOptions = { 
    enableHtml :  true, 
    positionClass: 'toast-bottom-right', 
    timeOut: 1200, 
    easeTime: 400 
  };
  
  constructor(private toastrService: ToastrService) { }

  success(message: string, title: string){
    this.toastrService.success(message, title, this.toasterOptions)
  }

  error(message: string, title: string){
    this.toastrService.error(message, title, this.toasterOptions)
  }

  info(message: string, title: string){
    this.toastrService.info(message, title, this.toasterOptions)
  }

  warning(message: string, title: string){
    this.toastrService.warning(message, title, this.toasterOptions)
  }

}

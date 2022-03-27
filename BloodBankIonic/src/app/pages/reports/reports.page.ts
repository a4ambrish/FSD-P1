import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBankService } from '../../services/bloodbank.service';
import { CommonServiceService } from './../../services/common-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  public GetAllBloodGroupSummary: any = [];
  public GetAllDoctorSummary: any = [];

  constructor(public service: BloodBankService, private route: Router, 
    private fb: FormBuilder, private commonService: CommonServiceService) { }


  ngOnInit() {
    this.getAllBloodGroupSummary();
    this.getAllDoctorSummary();
  }

  getAllBloodGroupSummary() {
    this.service.getAllBloodGroupSummary().subscribe((res: any)=> {
    if(res.status == true) {
      this.GetAllBloodGroupSummary = res.result;
      this.commonService.hideLoader();
    }
    else {
       this.commonService.hideLoader();
       this.commonService.showMessage(res.message,'danger');
    }
  },
  error => {
     this.commonService.hideLoader();
     this.commonService.showMessage(error,'danger');
  });
}


getAllDoctorSummary() {
  debugger
  this.service.getAllDoctorSummary().subscribe((res: any)=> {
  if(res.status == true) {
    this.GetAllDoctorSummary = res.result;
    this.commonService.hideLoader();
  }
  else {
     this.commonService.hideLoader();
     this.commonService.showMessage(res.message,'danger');
  }
},
error => {
   this.commonService.hideLoader();
   this.commonService.showMessage(error,'danger');
});
}

}

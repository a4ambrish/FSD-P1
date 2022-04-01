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
  BloodGroupSummaryDetails: boolean = false;
  DoctorSummaryDetails: boolean = false;
  public GetAllBloodGroupSummary: any = [];
  public GetAllDoctorSummary: any = [];
  public GetBloodGroupSummaryDetails: any = [];
  public GetDoctorSummaryDetails: any = [];

  constructor(public service: BloodBankService, private route: Router, 
    private fb: FormBuilder, private commonService: CommonServiceService) { }


  ngOnInit() {
    this.getAllBloodGroupSummary();
    this.getAllDoctorSummary();
  }

  getAllBloodGroupSummary() {
    this.commonService.showLoader().then(()=>{
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
    });
  }

  getBloodGroupSummaryDetails(bloodGroup: string) {
    var config = {
      headers: {
      "bloodgroup": bloodGroup
        }
      }
    this.commonService.showLoader().then(()=>{
    this.service.getBloodGroupSummaryDetails(config).subscribe((res: any)=> {
      if(res.status == true) {
        this.GetBloodGroupSummaryDetails = res.result;
        this.BloodGroupSummaryDetails = true;
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
  });
  }

  getDoctorSummaryDetails(id: any) {
    var Id: string = id + '';
    var config = {
      headers: {
      "doctorid": Id
        }
      }
    this.commonService.showLoader().then(()=>{
    this.service.getDoctorSummaryDetails(config).subscribe((res: any)=> {
      if(res.status == true) {
        this.GetDoctorSummaryDetails = res.result;
        this.DoctorSummaryDetails = true;
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
  });
  }


  getAllDoctorSummary() {
    //this.commonService.showLoader().then(()=>{
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
    //});
  }

  closeDonorDetailsByBloodGroup() {
    this.BloodGroupSummaryDetails = false;
  }

  closeDonorDetailsByDoctor() {
    this.DoctorSummaryDetails = false;
  }

}

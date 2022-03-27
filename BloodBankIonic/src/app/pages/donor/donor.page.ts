import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBankService } from '../../services/bloodbank.service';
import { CommonServiceService } from './../../services/common-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.page.html',
  styleUrls: ['./donor.page.scss'],
})
export class DonorPage implements OnInit {
  public GetAllDonorList: any = [];
  display='none';

  constructor(public service: BloodBankService, private route: Router, 
    private fb: FormBuilder, private commonService: CommonServiceService) { }

  ngOnInit() {
    this.getAllDonorList();
  }

  getAllDonorList() {
      this.service.getAllDonorList().subscribe((res: any)=> {
      if(res.status == true) {
        this.GetAllDonorList = res.result;
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

  onSubmit() {
    this.service.addDonor()
    .subscribe((res: any) => {
      if (res.status === true) {
        this.resetDonorForm();
        this.closeModalDialog();
        this.getAllDonorList();
      }
      else {
        this.commonService.showMessage(res.responseMap.error,'danger');
      }
    });
  }

  openModalDialog(){
    this.display='block'; 
  }

  closeModalDialog(){
    this.display='none'; 
    this.resetDonorForm();
  }

  resetDonorForm() {
    this.service.donorModel.reset();
  }

 

}

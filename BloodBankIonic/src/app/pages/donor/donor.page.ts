import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBankService } from '../../services/bloodbank.service';
import { CommonServiceService } from './../../services/common-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-donor',
  templateUrl: './donor.page.html',
  styleUrls: ['./donor.page.scss'],
})
export class DonorPage implements OnInit {
  public GetAllDonorList: any = [];
  display='none';
  addDonor: boolean = false;
  datePipe = new DatePipe('en-us');

  constructor(public service: BloodBankService, private route: Router, 
    private fb: FormBuilder, private commonService: CommonServiceService) { 
      this.service.donorModel.controls["regDate"].setValue(this.datePipe.transform(new Date(),"yyyy-MM-dd"));
    }

  ngOnInit() {
    this.getAllDonorList();
  }

  getAllDonorList() {
      this.commonService.showLoader().then(()=>{
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
    });
  }

  onSubmit() {
    this.commonService.showLoader().then(()=>{
      this.service.addDonor().subscribe((res: any) => {
        if (res.status === true) {
          this.resetDonorForm();
          this.closeModalDialog();
          this.getAllDonorList();
          this.commonService.hideLoader();
        }
        else {
          this.commonService.hideLoader();
          this.commonService.showMessage(res.error,'danger');
        }
      });
   });
  }

  openModalDialog(){
    //this.display='block';
    this.addDonor = true;
  }

  closeModalDialog(){
    //this.display='none'; 
    this.resetDonorForm();
    this.addDonor = false;
  }

  resetDonorForm() {
    this.service.donorModel.reset();
    this.service.donorModel.controls["regDate"].setValue(this.datePipe.transform(new Date(),"yyyy-MM-dd"));
  }

  getDonorDetailsById(id: any) {
    var config = {
      headers: {
      "id": id
        }
      }
    this.commonService.showLoader().then(()=>{
      this.service.getDonorById(config).subscribe((res: any)=> {
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
  });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBankService } from '../../services/bloodbank.service';
import { CommonServiceService } from './../../services/common-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AESEncryptDecryptService } from '../../services/aesencrypt-decrypt.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {
  public GetAllDoctorList: any = [];
  display='none';

  constructor(public service: BloodBankService, private route: Router, private AESEncryptDecryptService: AESEncryptDecryptService,
    private fb: FormBuilder, private commonService: CommonServiceService) { }

  ngOnInit() {
    this.getAllDoctorList();
    this.getAllEncDoctorList();
  }

  getAllDoctorList() {
      this.service.getAllDoctorList().subscribe((res: any)=> {
      if(res.status == true) {
        this.GetAllDoctorList = res.result;
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
    this.service.addDoctor().subscribe((res: any) => {
      if (res.status === true) {
        this.resetDoctorForm();
        this.closeModalDialog();
        this.getAllDoctorList();
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
    this.resetDoctorForm();
  }

  resetDoctorForm() {
    this.service.donorModel.reset();
  }

  getAllEncDoctorList() {
      this.service.getAllEncDoctorList().subscribe((res: any)=> {
        let decryptedText = this.AESEncryptDecryptService.decrypt(res);
        if(res.status == true) {
          this.GetAllDoctorList = res.result;
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

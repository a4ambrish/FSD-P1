import { Component, OnInit } from '@angular/core';
import { BloodBankService } from '../../services/bloodbank.service';
import { CommonServiceService } from './../../services/common-service.service';

@Component({
  selector: 'app-blood-group',
  templateUrl: './blood-group.page.html',
  styleUrls: ['./blood-group.page.scss'],
})
export class BloodGroupPage implements OnInit {
  public GetAllBloodDonationList: any = [];
  public GetAllDoctorList: any = [];
  public GetAllDonorList: any = [];
  display='none';

  constructor(private commonService: CommonServiceService, private service: BloodBankService) { }

  ngOnInit() {
    this.getAllBloodDonationList();
    this.getAllDoctorList();
    this.getAllDonorList();
  }

  getAllBloodDonationList() {
    this.service.getAllBloodDonationList().subscribe((res: any)=> {
    if(res.status == true) {
      this.GetAllBloodDonationList = res.result;
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
  this.service.addBloodDonator().subscribe((res: any) => {
    if (res.status === true) {
      this.resetBloodDonationForm();
      this.closeModalDialog();
      this.getAllBloodDonationList();
    }
    else {
      this.commonService.showMessage(res.error,'danger');
    }
  });
}

openModalDialog(){
  this.display='block'; 
}

closeModalDialog(){
  this.display='none'; 
  this.resetBloodDonationForm();
}

resetBloodDonationForm() {
  this.service.bloodDonationModel.reset();
}


}

import { Component, OnInit } from '@angular/core';
import { BloodBankService } from '../../services/bloodbank.service';
import { CommonServiceService } from './../../services/common-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  bloodDonationForm: FormGroup;
  bloodDonation: any;

  constructor(private commonService: CommonServiceService, private service: BloodBankService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllBloodDonationList();
    this.getAllDoctorList();
    this.getAllDonorList();
    this.bloodDonationForm = this.fb.group({
      donor_id: ['', Validators.required],
      doctor_id: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }


  BloodGroupDetail = {
    donor_name:'',
    doctor_name:'',
    quantity:''
  }

  getAllBloodDonationList() {
      this.commonService.showLoader().then(()=>{
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
    });
  }

  getAllDoctorList() {
    //this.commonService.showLoader().then(()=>{
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
    //});
  }

  getAllDonorList() {
    //this.commonService.showLoader().then(()=> {
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
    //});
  }

  onSubmit() {
    this.commonService.showLoader().then(()=> {
      this.bloodDonation = this.bloodDonationForm.value;
      this.service.addBloodDonator(this.bloodDonation).subscribe((res: any) => {
        if (res.status === true) {
          this.resetBloodDonationForm();
          this.closeModalDialog();
          this.getAllBloodDonationList();
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
    this.display='block'; 
  }

  closeModalDialog(){
    this.display='none'; 
    this.resetBloodDonationForm();
  }

  resetBloodDonationForm() {
    this.bloodDonationForm.reset();
    this.bloodDonationForm = this.fb.group({
      donor_id: ['', Validators.required],
      doctor_id: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  editDonatorDetail(donator:any)
  {
    debugger
    this.BloodGroupDetail = donator;
    console.log(this.BloodGroupDetail);
    this.openModalDialog();
  }

}

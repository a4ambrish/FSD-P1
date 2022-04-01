import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingController } from '@ionic/angular';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  snackbar: any;
  snackMsg: any;
  settimeout: any;

  constructor(handler: HttpBackend, private spinner: NgxSpinnerService, private datePipe: DatePipe,
     private route: ActivatedRoute, public loadingCtrl: LoadingController, private http: HttpClient,) {
      this.http = new HttpClient(handler);
  }

  showMessage(message: string, type?: string) {
    this.snackbar = document.getElementById('snackbar_module');
    this.snackMsg = document.getElementById('snack_msg');
    this.snackbar.style.display = 'block';
    this.snackbar.style.animation = 'fadeIn 500s linear';
    this.snackbar.style.background = 'rgb(88 104 255)';
    this.snackbar.style.textTransform = 'capitalize';
    if (type === 'danger') {
      this.snackbar.style.background = '#ef4848';
    }
    if(type === 'success'){
      this.snackbar.style.background ='green';
    }
    this.snackMsg.innerText = message;
    this.removeToast(this.snackbar);
  }

  cleartimeout() {
    clearTimeout(this.settimeout);
  }

  removeToast(snackbar = null) {
    if (!snackbar) {
      this.snackbar = document.getElementById('snackbar_module');
    }
    this.settimeout = setTimeout(() => {
      this.snackbar.style.animation = 'fadeOut 5000s linear';
      setTimeout(() => {
        this.snackbar.style.display = 'none';
      }, 1000);
    }, 350);
  }

  async showLoader() {
    const loading = await this.loadingCtrl.create({
        spinner: 'lines',
        message: 'Please wait...',
        translucent: true
    });

    return loading.present();
  }

  hideLoader() {
    this.loadingCtrl.dismiss(null , 'cancel').then((res) => {
    
     // console.log('Loader closed!', res);

    }).catch((err) => {
    //  console.log('Error occured : ', err);
    });
  }

  parseResponse(response) {
    if (response.status === false) {
        this.showMessage(`${response.message}`, 'danger');
    }
  }

  getParam(param) {
    let value = this.route.snapshot.paramMap.get(param)
    return value;
  }

  getCurrentTimeStamp() {
    return this.datePipe.transform(new Date(), 'yyyyMMdd_HHmmss');
  }

  updateMaxDate(fromDate) {
    let toDate = new Date(fromDate);
    toDate.setDate(toDate.getDate() + 30);
    return this.datePipe.transform(toDate, "yyyy-MM-dd");
  }

  setDate(date) {
    let changeDate = new Date(date);
    return this.datePipe.transform(changeDate, "yyyy-MM-dd");
  }

  prevDate(date, days = 1) {
    date = date - (86400000 * days);
    let changeDate = new Date(date);
    return this.datePipe.transform(changeDate, "yyyy-MM-dd");
  }

  nextDate(date, days = 1) {
    date = date + (86400000 * days);
    let changeDate = new Date(date);
    return this.datePipe.transform(changeDate, "yyyy-MM-dd");
  }

  checkForValidImg(event) {
    let isValidExtension = true;
    if (!event.currentTarget.files || event.currentTarget.files.length == 0) {
        return isValidExtension;
    }
    let file = event.currentTarget.files[0];
    var filePath = file.name;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
        isValidExtension = false;
    }

    if (!isValidExtension) {
        this.showMessage("Please select valid image", "danger");
        $(event.currentTarget).val("");
    }
    return isValidExtension;
  }

  getUniqueId(prefix) {
    let unique = new Date().getTime() + Math.floor(Math.random() * 90000) + 10000;;
    return prefix + unique;
  }

  downloadImg(url, config) {
    return this.http.get(url, config)
  }

Spinner() {
  this.loadingCtrl.create({
    spinner: 'lines',
    message: 'Please wait..',
    duration: 20
  }).then((res) => {
    res.present();
    res.onDidDismiss().then((res) => {
    });
  });
} 


}

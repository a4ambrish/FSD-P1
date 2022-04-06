import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

@Injectable({
providedIn: 'root'
})

export class BloodBankService {
    baseurl = 'http://localhost:5125/api'
constructor(private http: HttpClient, private fb: FormBuilder) { }

    private getServerErrorMessage(error: HttpErrorResponse): string {
        switch (error.status) {
            case 400: {
                return `Bad Request: ${error.status}`;
            }
            case 404: {
                return `Not Found: ${error.status}`;
            }
            case 403: {
                return `Access Denied: ${error.status}`;
            }
            case 500: {
                return `Internal Server Error: ${error.status}`;
            }
            default: {
                return `Unknown Server Error: ${error.status}`;
            }

        }
    }

    getAllDonorList() {
        return this.http.get<any>(this.baseurl + `/donorlist`).pipe(
            catchError(error => {
                let errorMsg: string;
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = this.getServerErrorMessage(error);
                }
                return throwError(errorMsg);
            })
        );
    }

    getDonorById(config) {
        return this.http.get<any>(this.baseurl + `/donorById`, config).pipe(
            catchError(error => {
                let errorMsg: string;
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = this.getServerErrorMessage(error);
                }
                return throwError(errorMsg);
            })
        );
    }

    getAllDoctorList() {
        return this.http.get<any>(this.baseurl + `/doctorlist`).pipe(
            catchError(error => {
                let errorMsg: string;
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = this.getServerErrorMessage(error);
                }
                return throwError(errorMsg);
            })
        );
    }

    getAllBloodDonationList() {
        return this.http.get<any>(this.baseurl + `/donatorlist`).pipe(
            catchError(error => {
                let errorMsg: string;
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = this.getServerErrorMessage(error);
                }
                return throwError(errorMsg);
            })
        );
    }

    getAllBloodGroupSummary() {
        return this.http.get<any>(this.baseurl + `/bloodgroupreportlist`).pipe(
            catchError(error => {
                let errorMsg: string;
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = this.getServerErrorMessage(error);
                }
                return throwError(errorMsg);
            })
        );
    }

    getBloodGroupSummaryDetails(config) {
        return this.http.get<any>(this.baseurl + `/bloodgroupsummarydetails`, config).pipe(
            catchError(error => {
                let errorMsg: string;
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = this.getServerErrorMessage(error);
                }
                return throwError(errorMsg);
            })
        );
    }

    getDoctorSummaryDetails(config) {
        return this.http.get<any>(this.baseurl + `/doctorsummarydetails`, config).pipe(
            catchError(error => {
                let errorMsg: string;
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = this.getServerErrorMessage(error);
                }
                return throwError(errorMsg);
            })
        );
    }

    getAllDoctorSummary() {
        return this.http.get<any>(this.baseurl + `/doctorsummarylist`).pipe(
            catchError(error => {
                let errorMsg: string;
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = this.getServerErrorMessage(error);
                }
                return throwError(errorMsg);
            })
        );
    }


    donorModel = this.fb.group({
        name: ['', Validators.required],
        dob: ['', Validators.required],
        regDate: ['', Validators.required],
        bloodGroup: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', Validators.required]
        });

        addDonor() {
        var body = {
            name: this.donorModel.value.name,
            dob: this.donorModel.value.dob,
            date_of_reg: this.donorModel.value.regDate,
            blood_group: this.donorModel.value.bloodGroup,
            address: this.donorModel.value.address,
            city: this.donorModel.value.city,
            pincode: this.donorModel.value.pincode
        };
            return this.http.post<any>(this.baseurl + `/adddonor`, body).pipe(
                catchError(error => {
                    let errorMsg: string;
                    if (error.error instanceof ErrorEvent) {
                        errorMsg = `Error: ${error.error.message}`;
                    } else {
                        errorMsg = this.getServerErrorMessage(error);
                    }
                    return throwError(errorMsg);
                })
            );
        }

        doctorModel = this.fb.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required]
            });

        addDoctor() {
            var body = {
                firstname: this.doctorModel.value.firstname,
                lastname: this.doctorModel.value.lastname
            };
                return this.http.post<any>(this.baseurl + `/adddoctor`, body).pipe(
                    catchError(error => {
                        let errorMsg: string;
                        if (error.error instanceof ErrorEvent) {
                            errorMsg = `Error: ${error.error.message}`;
                        } else {
                            errorMsg = this.getServerErrorMessage(error);
                        }
                        return throwError(errorMsg);
                    })
                );
            }
            
        addBloodDonator(body) {
                return this.http.post<any>(this.baseurl + `/adddonator`, body).pipe(
                    catchError(error => {
                        let errorMsg: string;
                        if (error.error instanceof ErrorEvent) {
                            errorMsg = `Error: ${error.error.message}`;
                        } else {
                            errorMsg = this.getServerErrorMessage(error);
                        }
                        return throwError(errorMsg);
                    })
                );
            }

        getAllEncDoctorList() {
            return this.http.get<any>(this.baseurl + `/v2/doctorlist`).pipe(
                catchError(error => {
                    let errorMsg: string;
                    if (error.error instanceof ErrorEvent) {
                        errorMsg = `Error: ${error.error.message}`;
                    } else {
                        errorMsg = this.getServerErrorMessage(error);
                    }
                    return throwError(errorMsg);
                })
            );
        }




}
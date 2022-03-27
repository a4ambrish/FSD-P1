import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DoctorPageRoutingModule } from './doctor-routing.module';
import { DoctorPage } from './doctor.page';
import { HeaderPageModule } from 'src/app/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DoctorPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [DoctorPage]
})
export class DoctorPageModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DonorPageRoutingModule } from './donor-routing.module';
import { DonorPage } from './donor.page';
import { HeaderPageModule } from 'src/app/header/header.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DonorPageRoutingModule,
    HeaderPageModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [DonorPage],
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class DonorPageModule {}

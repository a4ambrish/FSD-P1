import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BloodGroupPageRoutingModule } from './blood-group-routing.module';
import { BloodGroupPage } from './blood-group.page';
import { HeaderPageModule } from 'src/app/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BloodGroupPageRoutingModule,
    HeaderPageModule
  ],
  declarations: [BloodGroupPage]
})
export class BloodGroupPageModule {}

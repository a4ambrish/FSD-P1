import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from './header.page';
import { HeaderPageRoutingModule } from './header-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageRoutingModule
  ],
  exports: [HeaderPage],
  declarations: [HeaderPage]
})

export class HeaderPageModule {}

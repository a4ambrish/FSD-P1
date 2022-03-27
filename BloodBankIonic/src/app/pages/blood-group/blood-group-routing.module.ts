import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodGroupPage } from './blood-group.page';

const routes: Routes = [
  {
    path: '',
    component: BloodGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodGroupPageRoutingModule {}

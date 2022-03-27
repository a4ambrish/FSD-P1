import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DonorPage } from './pages/donor/donor.page';
import { DoctorPage } from './pages/doctor/doctor.page';
import { ReportsPage } from './pages/reports/reports.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { BloodGroupPage } from './pages/blood-group/blood-group.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    data: { title: 'dashboard' }
  },
  {
    path: 'donor',
    component: DonorPage,
    data: { title: 'donor' }
  },
  {
    path: 'doctor',
    component: DoctorPage,
    data: { title: 'doctor' }
  },
  {
    path: 'bloodgroup',
    component: BloodGroupPage,
    data: { title: 'bloodgroup' }
  },
  {
    path: 'reports',
    component: ReportsPage,
    data: { title: 'reports' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {}

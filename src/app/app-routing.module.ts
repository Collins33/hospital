import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PatientDetailComponent }  from './patient-detail/patient-detail.component';


const routes: Routes=[
  {path:'patients',component:PatientComponent},
  {path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PatientDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

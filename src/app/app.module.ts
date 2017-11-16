import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PatientService} from './patient.service'


import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { FormsModule } from '@angular/forms';
import { PatientDetailComponent } from './patient-detail/patient-detail.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientDetailComponent
  ],
 imports: [
  BrowserModule,
  FormsModule
],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PatientService} from './patient.service'


import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { FormsModule } from '@angular/forms';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';


import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientDetailComponent,
    MessagesComponent,
    DashboardComponent, 
  ],
 imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
//  HttpClientInMemoryWebApiModule.forRoot(
//   InMemoryDataService, { dataEncapsulation: false }
// )
],
  providers: [PatientService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

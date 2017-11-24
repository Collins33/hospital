import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from '../message.service';
import { Patient } from '../patient';
import {PatientService} from '../patient.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  patients:Patient[];



  //inject the service
  constructor(private patientService:PatientService) { }

  //function to retrieve patients from the service we injected into the class

  getPatient():void{
    this.patientService.getPatients()
    //edit the get patient so that it corresponds with the new method
    .subscribe(patients => this.patients = patients)
  }
  //delete the patient
  delete(patient:Patient):void{
    this.patients=this.patients.filter(p =>p !==patient);
    this.patientService.deletePatient(patient).subscribe()
  }

  ngOnInit() {
    //call the method inside the lifecycle hook
    this.getPatient();
  }


}

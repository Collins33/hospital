import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Patient } from '../patient';
import {PatientService} from '../patient.service'




@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PatientComponent implements OnInit {
  //add patient property for binding
  patients:Patient[];
  
  selectedPatient=Patient;
  
  //inject the service
  constructor(private patientService:PatientService) { }

  //function to retrieve patients from the service we injected into the class
  getPatient():void{
    this.patientService.getPatients()
    .subscribe(patients => this.patients = patients);

  }

  ngOnInit() {
    //call the method inside the lifecycle hook
    this.getPatient();
  }

onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }

}

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



  //inject the service
  constructor(private patientService:PatientService) { }

  //function to retrieve patients from the service we injected into the class

  getPatient():void{
    this.patientService.getPatients()
    //edit the get patient so that it corresponds with the new method
    .subscribe(patients => this.patients = patients)
  }

  add(first:string,last:string,email:string,birth:string,phone:string):void{
    //remove white space
    first=first.trim()
    last=last.trim()
    email=email.trim()
    birth=birth.trim()
    phone=phone.trim()
    if(!first){return;}
    this.patientService.addPatient({first,last,email,birth,phone} as Patient)
    .subscribe(patient => {
      this.patients.push(patient);
    });
  };



  ngOnInit() {
    //call the method inside the lifecycle hook
    this.getPatient();
  }



}

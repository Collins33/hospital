import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Patient } from '../patient';
import {PATIENTS} from '../mock-patients'




@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PatientComponent implements OnInit {
  //add patient property for binding
  patients = PATIENTS;

  selectedPatient=Patient;
  
  constructor() { }

  ngOnInit() {
  }

onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }

}

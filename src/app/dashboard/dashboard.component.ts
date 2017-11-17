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
  patients: Patient[]=[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatient();
  }

   getPatient():void{
    this.patientService.getPatients()
    //edit the get patient so that it corresponds with the new method
    .subscribe(patients => this.patients = patients)
  }


}

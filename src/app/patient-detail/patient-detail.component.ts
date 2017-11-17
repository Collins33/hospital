import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {PatientService} from '../patient.service'

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PatientDetailComponent implements OnInit {
@Input() patient: Patient;
  
  constructor(
     private route: ActivatedRoute,
     private patientService: PatientService,
     private location: Location
  ) {}
    getPatient():void{
      const id= +this.route.snapshot.paramMap.get('id');
      this.patientService.getPatient(id)
      .subscribe(patient => this.patient = patient);
    }

  ngOnInit() {
    this.getPatient();
  }

}

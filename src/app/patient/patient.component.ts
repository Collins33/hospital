import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PatientComponent implements OnInit {
  patient:Patient={
    id:1,
    name:"Collins"
  };

  constructor() { }

  ngOnInit() {
  }

}

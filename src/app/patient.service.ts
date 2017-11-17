import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { PATIENTS } from './mock-patients';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



@Injectable()
export class PatientService {


  getPatients(): Observable<Patient[]>{
    return of(PATIENTS);
  }
  
  constructor() { }

}

import { Injectable } from '@angular/core';
import { Patient } from './patient';
import {PATIENTS} from './mock-patients'

@Injectable()
export class PatientService {

  constructor() { }

  getPatients():Patient[]{
    return PATIENTS;
  }

}

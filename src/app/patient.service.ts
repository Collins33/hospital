import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { PATIENTS } from './mock-patients';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';


@Injectable()
export class PatientService {


  getPatients(): Observable<Patient[]>{
    this.messageService.add('PatientService:fetched patients');
    return of(PATIENTS);
  }
  
  constructor(private messageService: MessageService) { }

}

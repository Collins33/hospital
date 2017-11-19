import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { PATIENTS } from './mock-patients';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PatientService {
    private patientUrl = 'api/patients';  // URL to web api

    //get patients using http
  getPatients(): Observable<Patient[]>{
    this.messageService.add('PatientService:fetched patients');
    return this.http.get<Patient[]>(this.patientUrl);
  }

  getPatient(id: number): Observable<Patient[]>{
    this.messageService.add('PatientService:fetched patients id=${id}');
    //make app get patients by using http
    return this.http.get<Patient[]>(this.patientUrl);
  }
  
  constructor(private messageService: MessageService,
   private http: HttpClient,) { }

}

import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { PATIENTS } from './mock-patients';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PatientService {
    private patientUrl = 'api/patients';  // URL to web api


    //get patients using http
  getPatients(): Observable<Patient[]>{
    this.messageService.add('PatientService:fetched patients');
    return this.http.get<Patient[]>(this.patientUrl)
    .pipe(
      catchError(this.handleError('getPatients', []))
    );
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

updatePatient(patient:Patient):Observable<any>{
  return this.http.put(this.patientUrl,patient,httpOptions);
}

//add patient
/** POST: add a new hero to the server */
addPatient (patient: Patient): Observable<Patient> {
  return this.http.post<Patient>(this.patientUrl, patient, httpOptions);
}



  getPatient(id: number):Observable<Patient>{
     const url = `${this.patientUrl}/${id}`;
    return this.http.get<Patient>(url).pipe(
    //tap(_ => this.log(`fetched patient id=${id}`)),
    catchError(this.handleError<Patient>(`getPatient id=${id}`))
  );;


  }

  constructor(private messageService: MessageService,
   private http: HttpClient,) { }

}

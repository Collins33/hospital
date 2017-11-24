import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const patients = [
      { id: 1, first: 'collins',last:"njau",email:"collinsnjau39@gmail.com",birth:"15/9/1994",phone:"0702848032"},
  { id: 2, first: 'muru',last:"njau",email:"murunjau390@gmail.com",birth:"15/7/1994",phone:"0702868032"},
  { id: 3, first: 'njay',last:"collins",email:"murunjau30@gmail.com",birth:"15/7/1994",phone:"0702868082"},
  { id: 4, first: 'fintro',last:"collins",email:"murunjau30@gmail.com",birth:"15/7/1994",phone:"0702868082"},
   { id: 5, first: 'Mike',last:"canales",email:"murunjau300@gmail.com",birth:"19/7/1994",phone:"0702888082"},
    { id: 6, first: 'Cal',last:"Wutro",email:"murunjau30@gmail.com",birth:"15/7/1994",phone:"0702868082"},
     { id: 7, first: 'Fidel',last:"Trevor",email:"murunjau30@gmail.com",birth:"15/7/1994",phone:"0702868082"},
      { id: 8, first: 'Andy',last:"Rubin",email:"murunjau300@gmail.com",birth:"15/7/1994",phone:"0702868082"}
    ];
    return {patients};
  }
}

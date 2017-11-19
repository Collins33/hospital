import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const patients = [
      { id: 1, first: 'collins',last:"njau",email:"collinsnjau39@gmail.com",birth:"15/9/1994",phone:"0702848032"},
  { id: 2, first: 'muru',last:"njau",email:"murunjau390@gmail.com",birth:"15/7/1994",phone:"0702868032"}
    ];
    return {patients};
  }
}
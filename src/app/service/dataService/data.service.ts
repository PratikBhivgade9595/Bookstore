import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private messageSource = new BehaviorSubject({ type:'',data:[]}); //current value
  currentData= this.messageSource.asObservable();

  changeDataMessage(message: any) {
    console.log(message)
    this.messageSource.next(message)
  }
}

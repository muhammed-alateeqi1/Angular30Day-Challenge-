import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExServiceService {
  private numbersSubject = new BehaviorSubject<number[]>([100,200,300]);
  // convert the subject into a Obsrvable 
  // why : cause to make a subscribe easly on it 
  numbers$ = this.numbersSubject.asObservable();
  
  constructor() { }

  // getNumber(){
  //   return of([100,200,300])
  // }

  updateNumbers(newNumbers : number[]){
    this.numbersSubject.next(newNumbers)
  }
}

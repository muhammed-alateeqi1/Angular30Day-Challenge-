import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comp-2.component.html',
  styleUrl: './comp-2.component.css',
})
export class Comp2Component {
  constructor(private TestService: TestService) {
    this.Loading()
  }
  jobTitle: string = 'Software Engineer {Forntendd Developer }';
  isDisabled: boolean = false;
  counter: number = 0;
  userInput:string = '';
  isLoading = true;
  users = ['Ali','Muhammed','Sama']
  Disabled() {
    this.isDisabled = false;
  }

  incremnet() {
    this.counter++;
  }

  decremnet() {
    this.counter--;
  }

  Reset(){
    this.counter = 0 ;
  }

  Loading(){
    setInterval(() => {
        this.isLoading = false;
    }, 1000);
  }



}

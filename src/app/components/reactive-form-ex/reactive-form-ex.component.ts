import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form-ex',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule ],
  templateUrl: './reactive-form-ex.component.html',
  styleUrl: './reactive-form-ex.component.css'
})
export class ReactiveFormExComponent {
  loginForm = new FormGroup({
    email: new FormControl('' ,[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
  })

  submitForm(){
    if(this.loginForm.valid){
      console.log("Form Data : ", this.loginForm.value);
    }else{
      console.log("Form Data : ", this.loginForm.errors);
    }
    this.clearInputs()
  }
  clearInputs(){
    this.loginForm.value.email = ''
    this.loginForm.value.password = ''
  }
}

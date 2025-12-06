import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interview-ex',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './interview-ex.component.html',
  styleUrl: './interview-ex.component.css',
})
export class InterviewExComponent {
  isVisable:boolean = true;
  userName !: string;
  displayUserName!:string;
  listItem: number[] = [];
  userInput: string = '';
  newList:number[] = [] ;
  getTheValues() {
    console.log(this.userInput);
    this.listItem.push(Number(this.userInput));
    console.log(this.listItem);
     this.newFun()
     this.userInput = '';
     
  }
  newFun(){
    this.newList = [...this.listItem];
  }
  DelFun(){
    this.newList.pop();
    this.newList = [...this.newList];
    console.log(this.newList);
  }

  getUserName(){
    this.displayUserName = `Hello !, ${this.userName}`;
    console.log(this.userName)

  }
  hideColor(){
    this.isVisable = false;
  }
}

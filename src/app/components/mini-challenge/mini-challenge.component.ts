import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-mini-challenge',
  standalone: true,
  imports: [FormsModule ,JsonPipe],
  templateUrl: './mini-challenge.component.html',
  styleUrl: './mini-challenge.component.css'
})
export class MiniChallengeComponent {
  users!:string;
  stoaredUsers:any = [];
  addUser(){
    this.stoaredUsers.push(this.users)
  }
  deleteUser(){
    this.stoaredUsers.push(this.users)
  }
}

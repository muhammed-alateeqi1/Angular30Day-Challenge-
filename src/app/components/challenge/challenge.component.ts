import { Component, OnInit } from '@angular/core';
import { ExServiceService } from '../../services/ex-service.service';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.css',
})
export class ChallengeComponent implements OnInit {
  numbers: number[] = [];
  constructor(private _ExServiceService: ExServiceService) {}
  ngOnInit(): void {
    this._ExServiceService.numbers$.subscribe({
      next: (data) => {
        this.numbers = data;
        console.log('updated data : ', data);
      },
    });
  }
  changeNumbers() {
    this._ExServiceService.updateNumbers([300, 400, 500]);
  }
}

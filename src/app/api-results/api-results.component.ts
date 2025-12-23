import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-api-results',
  standalone: true,
  imports: [],
  templateUrl: './api-results.component.html',
  styleUrl: './api-results.component.css',
})
export class ApiResultsComponent implements OnInit {
  yummyData: any[] = [];
  constructor(private _Test:TestService) {}
  ngOnInit(): void {

  }



}

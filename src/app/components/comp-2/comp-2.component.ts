import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-comp-2',
  standalone: true,
  imports: [],
  templateUrl: './comp-2.component.html',
  styleUrl: './comp-2.component.css',
})
export class Comp2Component {
  constructor(private TestService: TestService) {}


}

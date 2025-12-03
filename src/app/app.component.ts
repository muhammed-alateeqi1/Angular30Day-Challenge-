import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from "./components/comp-1/comp-1.component";
import { Comp2Component } from "./components/comp-2/comp-2.component";
import { ChallengeComponent } from "./components/challenge/challenge.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Comp1Component, Comp2Component, ChallengeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day-2';
}

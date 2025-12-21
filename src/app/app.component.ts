import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from "./components/comp-1/comp-1.component";
import { Comp2Component } from "./components/comp-2/comp-2.component";
import { ChallengeComponent } from "./components/challenge/challenge.component";
import { InterviewExComponent } from "./components/interview-ex/interview-ex.component";
import { ProductLitComponent } from "./components/product-lit/product-lit.component";
import { ReactiveFormExComponent } from "./components/reactive-form-ex/reactive-form-ex.component";
import { MiniChallengeComponent } from "./components/mini-challenge/mini-challenge.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Comp1Component, Comp2Component, ChallengeComponent, InterviewExComponent, ProductLitComponent, ReactiveFormExComponent, MiniChallengeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day-2';
}

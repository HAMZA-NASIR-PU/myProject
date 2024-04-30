import { Component } from '@angular/core';
import { LoadScriptsDirective } from '../../directives/load-scripts.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoadScriptsDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { LoadScriptsDirective } from '../../directives/load-scripts.directive';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [LoadScriptsDirective],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}

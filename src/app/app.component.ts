import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import * as $ from 'jquery';
declare var $: any; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

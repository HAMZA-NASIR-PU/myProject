import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadScriptsDirective } from '../../directives/load-scripts.directive';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [LoadScriptsDirective],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  constructor(private router: Router) {

  }

  logout(event: MouseEvent) {
    event.preventDefault(); // Prevent the default behavior
    console.log("Log out...");
    localStorage.clear();
    this.router.navigate(['']);
  }
}

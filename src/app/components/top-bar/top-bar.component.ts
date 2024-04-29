import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
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

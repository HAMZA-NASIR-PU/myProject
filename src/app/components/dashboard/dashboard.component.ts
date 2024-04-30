import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  // imports: [RouterOutlet, SideBarComponent, TopBarComponent, FooterComponent],
  imports: [RouterOutlet, FooterComponent, TopBarComponent, SideBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private dynamicScriptLoader: DynamicScriptLoaderService) {

  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('a', 'b', 'c', 'd', 'e', 'f').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.loadScripts();
  }

  logout(event: MouseEvent) {
    event.preventDefault(); // Prevent the default behavior
    console.log("Log out...");
    localStorage.clear();
    this.router.navigate(['']);
  }

}

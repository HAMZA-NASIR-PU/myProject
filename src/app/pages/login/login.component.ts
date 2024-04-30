import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { LoadScriptsDirective } from '../../directives/load-scripts.directive';

declare const toastr: any;  //template toastr
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, LoadScriptsDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("")
  });

  constructor(private readonly router: Router, private _loginService: LoginService) {
    console.log("Login Page...");
  }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    //Properties of a toastr
    // toastr.options.timeOut = 500;
    // toastr.success('Toaster Message', 'Toaster Title');
    // toastr.error('Toaster Message', 'Toaster Title');
    // toastr.info('Toaster Message', 'Toaster Title');
    if (form.valid) {
      console.log("Form is valid.");

      var loginObservable = this._loginService.authenticate(form.value.email, form.value.password);

      loginObservable.subscribe({
        next: (response: any) => {
          console.log("Token = " + response.token);
          console.log("Username = " + response.username);
          localStorage.setItem("token", response.token);
          this.router.navigate(["/dashboard/home"]);
        },
        error: (error) => {
          toastr.error('Invalid email/password', 'Authentication Error');
        }
      });


    }
    console.log('Email', form.value.email);
    console.log('Password', form.value.password);
  }
}

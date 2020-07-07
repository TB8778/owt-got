import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {allRoutes} from '../all-routes';
import {AuthService} from '../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    if (this.authService.isLogged()) {
      this.router.navigate([allRoutes.gotView]);
    }
  }

  login({name}: { name: string }): void {
    this.authService.login(name);
    this.router.navigate([allRoutes.gotView]);
  }
}

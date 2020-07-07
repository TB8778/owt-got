import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {allRoutes} from '../../all-routes';
import {AuthService} from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  name: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (!this.authService.isLogged()) {
      this.router.navigate([allRoutes.login]);
      return;
    }
    this.name = this.authService.getName();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate([allRoutes.login]);
  }

}

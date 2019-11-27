import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  navToHome() {
    this.router.navigateByUrl('/businessCards');
  }

  navNewCard() {
    this.router.navigateByUrl('/newCard');
  }

  logout() {
    this.authService.logout().then(ref => {
      let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/login';
      this.router.navigateByUrl(redirect);
      this.authService.setLoggedOut();
    });
  }

}

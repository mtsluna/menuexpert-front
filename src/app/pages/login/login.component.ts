import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

    this.authService.user$.subscribe((data) => {
      console.log(data)
    });

    //this.router.navigate(['qr', localStorage.getItem('qr')])
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any | undefined;
  image: string | undefined;
  loading: boolean = true;

  constructor(private authService: AuthService) { }

  async ngOnInit(): Promise<void> {

    this.setAuthUserData();

  }

  async login() {
    const auth = await this.authService.login();

    console.log(auth)

    this.image = (auth.additionalUserInfo?.profile as any)['picture'];
  }

  logout() {
    this.authService.logout();
  }

  setAuthUserData() {
    this.authService.getSession().subscribe((data) => {
      this.loading = false;
      this.image = data?.photoURL || undefined;
      this.user = data;
    })
  }

}

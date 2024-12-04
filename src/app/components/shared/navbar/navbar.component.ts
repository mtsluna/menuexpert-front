import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  isAuthenticated: boolean = false;
  user: any | undefined;
  image: string | undefined;
  loading: boolean = true;

  constructor(
    public authService: AuthService,
    private cartService: CartService
  ) { }

  async ngOnInit(): Promise<void> {
    this.authService.user$.subscribe({
      next: (data) => {
        console.log(data)
        this.user = data;
        this.image = data?.picture
        this.loading = false;
      }
    })
  }

  ngAfterViewInit(): void {
    this.loadGoogleLogin();
  }

  loadButtons() {
    this.loadGoogleLogin();
  }

  loadGoogleLogin() {
    if (window.google && window.google.accounts && window.google.accounts.id) {
      // Inicializar el widget manualmente
      window.google.accounts.id.initialize({
        client_id: '52106838606-nepv3nvq93uctr0bglmna5mik69bnfug.apps.googleusercontent.com',
        callback: this.handleCredentialResponse,
        auto_select: false
      });
      // Renderizar el botón
      window.google.accounts.id.renderButton(
        document.querySelector('.g_id_signin') as HTMLElement,
        {
          type: 'standard',
          size: 'large',
          theme: 'outline',
          text: 'signin',
          shape: 'rectangular',
          logo_alignment: 'left',
        }
      );
    }
  }

  handleCredentialResponse(response: any): void {
    console.log('Credential Response:', response);

    this.isAuthenticated = !!(response && response.credential);
  }

  async login() {
    // this.authService.loginWithRedirect({
    //   authorizationParams: {
    //     screen_hint: 'login',
    //     prompt: 'select_account',
    //     display: 'page',
    //   }
    // })
  }

  async logout() {
    // this.authService.logout({
    //   logoutParams: {
    //     returnTo: window.location.origin + '/qr',
    //   }
    // });
    this.cartService.clearCart();
    await this.cartService.getCartId();
  }

  protected readonly document = document;
}

import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaymentType} from "../../interfaces/payment-type";
import {CheckoutService} from "../../services/checkout/checkout.service";
import {CartService} from "../../services/cart.service";
import {MatDialog} from "@angular/material/dialog";
import {firstValueFrom, Observable} from "rxjs";
import {AngularFireAnalytics} from "@angular/fire/compat/analytics";
import {Store} from "../../interfaces/store";
import {map} from "rxjs/operators";
import {ClientService} from "../../services/client/client.service";
import {UserService} from "../../services/auth/user.service";
import {UserCheckoutComponent} from "./components/user-checkout/user-checkout.component";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  cartId: string | undefined = this.activatedRoute.snapshot.paramMap.get('id') || undefined;
  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;
  storeId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('store') || undefined;
  loading: boolean = false;

  store$: Observable<Store>;
  shouldLogin: boolean = false;

  paymentType: PaymentType = {
    id: '2'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private checkoutService: CheckoutService,
    private analytics: AngularFireAnalytics,
    private clientService: ClientService,
    public userService: UserService,
    private cartService: CartService,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar,
  ) {
    this.analytics.logEvent('checkout_view', {
      catalog: this.catalogId
    })

    this.activatedRoute.data.pipe(map(data => data['cart']))

    this.store$ = this.activatedRoute.data.pipe(map(data => data['store']))
  }

  async goToMercadoPago() {
    await this.analytics.logEvent('checkout_go_to_pay', {
      catalogId: this.catalogId
    })

    this.loading = true;

    const user = this.userService.user;

    if(!user) {
      this.matSnackBar.open('Debes iniciar sesión para continuar', 'Cerrar', {
        duration: 5000
      })
      this.loading = false;
      this.shouldLogin = true;
      return;
    }

    await this.cartService.getCartId()

    const { content } = await firstValueFrom(this.clientService.search(user?.id || '', user?.provider || ''));

    let [client] = content;

    console.log(client)

    if(!client?.email || !client?.address || !client?.phone) {
      const dialogRef = this.matDialog.open(UserCheckoutComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        panelClass: 'full-screen-modal',
        data: {
          user,
          client
        }
      })

      await firstValueFrom(dialogRef.afterClosed());
    }

    this.checkoutService.postCheckout(
      this.cartId || '',
      this.storeId || ''
    ).subscribe({
      next: (checkout) => {
        window.location.href = checkout.initPoint;
      }
    })
    this.loading = false;
  }

  paymentTypeEvent(paymentType: PaymentType) {
    this.paymentType = paymentType;
  }

}

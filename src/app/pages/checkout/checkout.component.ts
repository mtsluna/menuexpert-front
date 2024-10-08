import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaymentType} from "../../interfaces/payment-type";
import {CheckoutService} from "../../services/checkout/checkout.service";
import {CartService} from "../../services/cart.service";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../services/auth/auth.service";
import {firstValueFrom, Observable} from "rxjs";
import {AngularFireAnalytics} from "@angular/fire/compat/analytics";
import {Store} from "../../interfaces/store";
import {map} from "rxjs/operators";
import {ClientService} from "../../services/client/client.service";

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

  paymentType: PaymentType = {
    id: '2'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private matDialog: MatDialog,
    private authService: AuthService,
    private analytics: AngularFireAnalytics,
    private clientService: ClientService
  ) {
    this.analytics.logEvent('checkout_view', {
      catalog: this.catalogId
    })

    this.cartService.getApiItems();

    this.store$ = this.activatedRoute.data.pipe(map(data => data['store']))
  }

  async goToMercadoPago() {
    await this.analytics.logEvent('checkout_go_to_pay', {
      catalogId: this.catalogId
    })

    this.loading = true;

    const user = await firstValueFrom(this.authService.getSession());

    const { content } = await firstValueFrom(this.clientService.search(user?.uid || '', 'google.com'));

    let [client] = content;

    // if(!client) {
    //   const internalUser = await this.authService.login();
    //
    //   const { content } = await firstValueFrom(this.clientService.search(internalUser.user?.uid || '', 'google.com'));
    //
    //   [client] = content;
    //
    //   await this.cartService.getCartId()
    // }
    //
    // if(!client.email || !client.address || !client.phone) {
    //   const dialogRef = this.matDialog.open(UserCheckoutComponent, {
    //     maxWidth: '100vw',
    //     maxHeight: '100vh',
    //     height: '100%',
    //     width: '100%',
    //     panelClass: 'full-screen-modal',
    //     data: {
    //       user,
    //       client
    //     }
    //   })
    //
    //   await firstValueFrom(dialogRef.afterClosed());
    // }

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

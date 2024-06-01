import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaymentType} from "../../../interfaces/payment-type";
import {CheckoutService} from "../../../services/checkout/checkout.service";
import {CartService} from "../../../services/cart.service";
import {MatDialog} from "@angular/material/dialog";
import {UserCheckoutComponent} from "./components/user-checkout/user-checkout.component";
import {AuthService} from "../../../services/auth/auth.service";
import {firstValueFrom, lastValueFrom} from "rxjs";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  cartId: string | undefined = this.activatedRoute.snapshot.paramMap.get('cartId') || undefined;
  menuId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('menuId') || undefined;
  loading: boolean = false;

  paymentType: PaymentType = {
    id: '1'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private matDialog: MatDialog,
    private authService: AuthService
  ) {}

  async goToMercadoPago() {
    this.loading = true;
    const userTemp = {
      id: "asdasdasd"
    }

    if(userTemp.id) {

      const userGoogle = await firstValueFrom(this.authService.getUser())

      const dialogRef = this.matDialog.open(UserCheckoutComponent, {
        data: {
          userGoogle
        }
      })

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.loading = false;
      });
    } else {
      this.checkoutService.postCheckout(
        this.cartId || '',
        this.cartService.getRawItems(this.menuId)
      ).subscribe({
        next: (checkout) => {
          window.location.href = checkout.initPoint;
        }
      })
    }
  }

  paymentTypeEvent(paymentType: PaymentType) {
    this.paymentType = paymentType;
  }

}

import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaymentType} from "../../../interfaces/payment-type";
import {CheckoutService} from "../../../services/checkout/checkout.service";
import {CartService} from "../../../services/cart.service";
import {Tip} from "../../../interfaces/tip";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  cartId: string | undefined = this.activatedRoute.snapshot.paramMap.get('cartId') || undefined;
  menuId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('menuId') || undefined;
  tip: any = {
    price: {
      amount: 0,
      currency: ''
    }
  };

  paymentType: PaymentType = {
    id: '1'
  };

  constructor(private activatedRoute: ActivatedRoute, private checkoutService: CheckoutService, private cartService: CartService) {
  }

  changeTip(tip: Tip) {
    this.tip = tip;
  }

  goToMercadoPago() {
    this.checkoutService.postCheckout(
      this.cartId || '',
      this.cartService.getRawItems(this.menuId),
      this.tip
    ).subscribe({
      next: (checkout) => {
        window.location.href = checkout.initPoint;
      }
    })
  }

  paymentTypeEvent(paymentType: PaymentType) {
    this.paymentType = paymentType;
  }

}

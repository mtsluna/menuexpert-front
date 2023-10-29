import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Tip} from "../../interfaces/tip";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  cartId: string | undefined = this.activatedRoute.snapshot.paramMap.get('cartId') || undefined;
  tip: any = {
    price: {
      amount: 0,
      currency: ''
    }
  };

  constructor(private activatedRoute: ActivatedRoute) {
  }

  changeTip(tip: Tip) {
    this.tip = tip;
  }

}

import {Component, Input} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Tip} from "../../../interfaces/tip";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  @Input()
  tip: Tip = {
    price: {
      amount: 0,
      currency: ''
    }
  };

  constructor(private cartService: CartService) {
  }

  get productsAmount() {
    return this.cartService.getTotal();
  }

  get currency() {
    return this.cartService.getCurrency();
  }

}

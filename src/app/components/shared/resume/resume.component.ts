import {Component, Input} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Tip} from "../../../interfaces/tip";
import {ActivatedRoute} from "@angular/router";

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
      currency: {
        code: '',
        symbol: '',
        name: ''
      }
    }
  };

  menuId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('menuId') || undefined;

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) {
  }

  get productsAmount() {
    return this.cartService.getTotal(this.menuId);
  }

  get currency() {
    return this.cartService.getCurrency(this.menuId);
  }

}

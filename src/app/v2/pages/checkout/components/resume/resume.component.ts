import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Tip} from "../../../../../interfaces/tip";
import {CartService} from "../../../../../services/cart.service";

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

  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) {
  }

  get productsAmount() {
    return this.cartService.getTotal(this.catalogId);
  }

  get currency() {
    return this.cartService.getCurrency(this.catalogId);
  }

}

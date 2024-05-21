import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../../../services/cart.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

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

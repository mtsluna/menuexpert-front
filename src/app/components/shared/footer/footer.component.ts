import { Component } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) {
  }

  get hasCartItems() {
    return this.cartService.getItems(this.catalogId).length !== 0;
  }

}

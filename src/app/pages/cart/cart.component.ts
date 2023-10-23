import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Option} from "../../interfaces/option";
import {FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  get items() {
    return this.cartService.getItems();
  }

  get price() {
    return this.items.map((item) => {
      const extras = item.selections.map((value) => {
        return (value.selected.filter((value) => value !== false) as Array<Option>)
          .map((value) => value.price)
          .reduce((acc, next) => acc + next, 0)
      }).reduce((acc, next) => acc + next, 0);

      return (item.product?.price.amount || 0) + extras;
    }).reduce((acc, next) => acc + next, 0);
  }

}

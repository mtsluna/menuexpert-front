import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CartItem} from "../../../../../interfaces/cart-item";
import {CartService} from "../../../../../services/cart.service";
import {Customization} from "../../../../../interfaces/customization";
import {Option} from "../../../../../interfaces/option";

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss']
})
export class ResumeCardComponent implements OnInit {

  @Input()
  cartItem!: CartItem;
  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private cartService: CartService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = this.initForm();
    this.form.setValue(this.cartItem)
  }

  initForm() {
    const selected = (answer: Customization) => {
      return answer.max === 1 ? {
        selected: this.formBuilder.control(answer.options.map((option, index) => (answer.max === 1 && index == 0) ? option : false))
      } : {
        selected: this.formBuilder.array(answer.options.map((option, index) => (answer.max === 1 && index == 0) ? option : false))
      }
    }

    return this.formBuilder.group({
      id: [''],
      quantity: [this.cartItem.quantity],
      product: this.cartItem.product,
      comment: [this.cartItem.comment],
      selections: this.formBuilder.array(this.cartItem.product?.customizations?.map((answer) => {
        return this.formBuilder.group({
          id: [answer?.id],
          ...selected(answer)
        });
      }) || [])
    });
  }

  get optionsSelected() {
    const data = this.cartItem.selections.map((value) => {
      return (value.selected.filter((value) => value !== false) as Array<Option>)
        .map((value) => value.name)
        .join(', ')
    }).filter((v) => v !== '');

    if (this.cartItem.comment !== '') {
      data.push(this.cartItem.comment)
    }

    return data.join(', ');
  }

  get productPrice() {
    const extras = this.cartItem.selections.map((value) => {
      return (value.selected.filter((value) => value !== false) as Array<Option>)
        .map((value) => value.price)
        .reduce((acc, next) => acc + next.amount - (next.discount || 0), 0)
    }).reduce((acc, next) => acc + next, 0);

    return (((this.cartItem.product?.price.amount || 0) - (this.cartItem.product?.price.discount || 0) || 0) + extras) * this.cartItem.quantity;
  }

  listenQuantityUpdate(formEvent: FormGroup) {

    const cartItem = this.form.getRawValue();

    if (cartItem.quantity == 0) {
      this.cartService.removeItem(cartItem, this.catalogId);
      return;
    }

    this.form = formEvent
    this.cartItem = this.form.getRawValue()
    this.cartService.updateItem(cartItem, this.catalogId);
  }

  async edit() {
    await this.router.navigate([`/detail/${this.cartItem?.product?.id}`], {
      queryParams: {
        cartItem: this.cartItem.id,
        catalog: this.catalogId
      }
    })
  }

}
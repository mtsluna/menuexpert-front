import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../../interfaces/cart-item";
import {Option} from "../../../interfaces/option";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Answer} from "../../../interfaces/answer";
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss']
})
export class ResumeCardComponent implements OnInit {

  @Input()
  cartItem!: CartItem;
  menuId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('menuId') || undefined;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private cartService: CartService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = this.initForm();
    this.form.setValue(this.cartItem)
  }

  initForm() {
    const selected = (answer: Answer) => {
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
      selections: this.formBuilder.array(this.cartItem.product?.answers?.map((answer) => {
        return this.formBuilder.group({
          id: [answer?.id],
          ...selected(answer)
        });
      }) || [])
    });
  }

  get optionsSelected() {
    return this.cartItem.selections.map((value) => {
      return (value.selected.filter((value) => value !== false) as Array<Option>)
        .map((value) => value.name)
        .join(', ')
    }).join(', ')

  }

  get productPrice() {
    const extras = this.cartItem.selections.map((value) => {
      return (value.selected.filter((value) => value !== false) as Array<Option>)
        .map((value) => value.price)
        .reduce((acc, next) => acc + next.amount, 0)
    }).reduce((acc, next) => acc + next, 0);

    return ((this.cartItem.product?.price.amount || 0) + extras) * this.cartItem.quantity;
  }

  listenQuantityUpdate(formEvent: FormGroup) {
    const cartItem = this.form.getRawValue();
    if(cartItem.quantity == 0) {
      this.cartService.removeItem(cartItem);
      return;
    }

    this.form = formEvent
    this.cartItem = this.form.getRawValue()
    this.cartService.updateItem(cartItem);
  }

  async edit() {
    await this.router.navigate([`/menu/${this.menuId}/detail/${this.cartItem?.product?.id}`], {
      queryParams: {
        cartItem: this.cartItem.id
      }
    })
  }

}

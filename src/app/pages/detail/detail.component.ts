import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Customization } from "../../interfaces/customization";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Product } from "../../interfaces/product";
import { CartService } from "../../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product/product.service";
import {CartItem} from "../../interfaces/cart-item";
import {Option} from "../../interfaces/option";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    quantity: [1],
    product: null,
    comment: [''],
    selections: []
  });

  error: boolean = false;
  menuId: string | undefined = this.activatedRoute.snapshot.paramMap.get('menuId') || undefined;
  productId: string | undefined = this.activatedRoute.snapshot.paramMap.get('productId') || undefined;
  cartItem: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('cartItem') || undefined;
  product: Product = {
    id: '',
    title: '',
    price: {
      amount: 0,
      currency: {
        code: '',
        name: '',
        symbol: ''
      }
    },
    description: '',
    badges: [],
    image: '',
    customizations: []
  };

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    if(!this.menuId || !this.productId) {
      return;
    }

    if(!this.cartItem) {
      this.productService.getProduct(this.menuId, this.productId)
        .subscribe({
          next: (product) => {
            this.product = product;
            this.form = this.initForm();
          },
          error: () => {
            this.router.navigate(['not-found'])
          }
        })
    } else {

      const cartItem = this.cartService.getItem(this.cartItem, this.menuId);

      if(cartItem.product) {
        this.product = cartItem.product;
      }

      this.form = this.initForm();
      this.form.patchValue(cartItem);
    }
  }

  initForm() {
    const selected = (answer: Customization) => {
      return answer.max === 1 ? {
        selected: this.formBuilder.control({
          value: answer.options.map((option, index) => (answer.max === 1 && index == 0) ? option : false),
          disabled: false
        })
      } : {
        selected: this.formBuilder.array(answer.options.map((option, index) => this.formBuilder.control({value: (answer.max === 1 && index == 0) ? option : false, disabled: false })))
      }
    }

    return this.formBuilder.group({
      id: '',
      quantity: [1],
      product: this.product,
      comment: [''],
      selections: this.formBuilder.array(this.product?.customizations?.map((answer) => {
        return this.formBuilder.group({
          id: [answer?.id],
          ...selected(answer)
        });
      }) || [])
    });
  }

  getFormElement(index: number) {
    return (this.form.get('selections') as FormArray).at(index) as FormGroup;
  }

  addItem() {
    this.cartService.addItem(this.form.getRawValue(), this.menuId);
    this.router.navigate([`/menu/${this.menuId}`])
  }

  updateItem() {
    this.cartService.updateItem(this.form.getRawValue(), this.menuId)
    this.router.navigate([`/menu/${this.menuId}`])
  }

  get price() {
    const data = (this.form.getRawValue() as CartItem);

    const extras = data?.selections?.map((value) => {
      return (value.selected.filter((value) => value !== false) as Array<Option>)
        .map((value) => value.price)
        .reduce((acc, next) => acc + next.amount, 0)
    }).reduce((acc, next) => acc + next, 0);
    return (this.product.price.amount + extras) * data.quantity;
  }

}

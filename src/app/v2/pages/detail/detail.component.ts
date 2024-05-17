import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../../../interfaces/product";
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product/product.service";
import {Customization} from "../../../interfaces/customization";
import {CartItem} from "../../../interfaces/cart-item";
import {Option} from "../../../interfaces/option";
import {Store} from "../../../interfaces/store";
import {StoreService} from "../../../services/store/store.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  form: FormGroup = this.formBuilder.group({
    quantity: [1],
    product: null,
    comment: [''],
    selections: []
  });

  error: boolean = false;
  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;
  productId: string | undefined = this.activatedRoute.snapshot.paramMap.get('productId') || undefined;
  cartItem: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('cartItem') || undefined;
  store: Store = {};
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
    private productService: ProductService,
    private storeService: StoreService,
    private location: Location
  ) {  }

  ngOnInit(): void {

    this.store = this.storeService.getStoreFromLocalStorage();

    if(!this.catalogId || !this.productId) {
      return;
    }

    if(!this.cartItem) {
      this.productService.getProduct(this.catalogId, this.productId)
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

      const cartItem = this.cartService.getItem(this.cartItem, this.catalogId);

      console.log(cartItem)

      if(cartItem.product) {
        this.product = cartItem.product;
      }

      this.form = this.initForm();
      this.form.patchValue(cartItem);
    }
  }

  initForm() {
    const selected = (customization: Customization) => {
      return customization.max === 1 ? {
        selected: this.formBuilder.control({
          value: customization.options.map((option, index) => (customization.max === 1 && index === customization.options.map((product) => product.isActive).indexOf(true)) ? option : false),
          disabled: false
        })
      } : {
        selected: this.formBuilder.array(customization.options.map((option, index) => this.formBuilder.control({value: (customization.max === 1 && index == 0) ? option : false, disabled: !option.isActive })))
      }
    }

    return this.formBuilder.group({
      id: '',
      quantity: [1],
      product: this.product,
      comment: [''],
      selections: this.formBuilder.array(this.product?.customizations?.map((customization) => {
        return this.formBuilder.group({
          id: [customization?.id],
          ...selected(customization)
        });
      }) || [])
    });
  }

  getFormElement(index: number) {
    return (this.form.get('selections') as FormArray).at(index) as FormGroup;
  }

  addItem() {
    this.cartService.addItem(this.form.getRawValue(), this.catalogId);
    this.location.back();
  }

  updateItem() {
    this.cartService.updateItem(this.form.getRawValue(), this.catalogId)
    this.location.back();
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

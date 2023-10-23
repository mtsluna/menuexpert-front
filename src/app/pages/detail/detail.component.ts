import { Component, OnInit } from '@angular/core';
import { Answer } from "../../interfaces/answer";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Product } from "../../interfaces/product";
import { CartService } from "../../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  form!: FormGroup;
  menuId: string | undefined = this.activatedRoute.snapshot.paramMap.get('menuId') || undefined;
  product: Product = {
    id: 'abc1234',
    title: 'Bocadillo Kebab de Ternera Espanola ',
    price: {
      amount: 6.00,
      currency: 'US'
    },
    description: 'Carne de ternera, pollo, lechuga, tomate y mayonesa casera',
    badges: [
      {
        text: 'Popular',
        color: '21A300'
      }
    ],
    image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODE5ZDQ4YTM0ZDE2ZTYyNzk5NmU4ODRhZDdlOWJkZWUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==',
    answers: [
      {
        id: 'abc1234',
        name: 'Elige tu tipo de arroz',
        max: 1,
        options: [
          {
            id: 'abc1234a',
            name: 'Normal',
            price: 0
          },
          {
            id: 'abc1234b',
            name: 'Integral',
            price: 0
          },
          {
            id: 'abc1234b',
            name: 'Mixto',
            price: 0
          }
        ]
      },
      {
        id: 'abc1234',
        name: 'Elige la proteina',
        max: 2,
        options: [
          {
            id: 'abc1234a',
            name: 'Carne',
            price: 0
          },
          {
            id: 'abc1234b',
            name: 'Pollo',
            price: 0
          },
          {
            id: 'abc1234b',
            name: 'Cerdo',
            price: 1.99
          }
        ]
      },
      {
        id: 'abc1234',
        name: 'Elige el condimento',
        max: 2,
        options: [
          {
            id: 'abc1234a',
            name: 'Curcuma',
            price: 0
          },
          {
            id: 'abc1234b',
            name: 'Pimenton',
            price: 0
          },
          {
            id: 'abc1234b',
            name: 'Polluelo',
            price: 1.99
          }
        ]
      }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  initForm() {
    const selected = (answer: Answer) => {
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
      quantity: [1],
      product: this.product,
      comment: [''],
      selections: this.formBuilder.array(this.product?.answers?.map((answer) => {
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

  addItems() {
    console.log(this.form.getRawValue())
    this.cartService.addItem(this.form.getRawValue());
    this.router.navigate([`/menu/${this.menuId}`])
  }

}

import { Component, OnInit } from '@angular/core';
import {SectionType} from "../../interfaces/section";
import {Menu} from "../../interfaces/menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  cartId: string = 'caf6647b-e32d-4629-9d29-e283a570ddfd';

  sectionA = {id: 'sectionA', type: SectionType.VISUAL, name: 'Kebabs', products: [
      {
        id: 'asd',
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
        image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODE5ZDQ4YTM0ZDE2ZTYyNzk5NmU4ODRhZDdlOWJkZWUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw=='
      },
      {
        id: 'asd',
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
        image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODE5ZDQ4YTM0ZDE2ZTYyNzk5NmU4ODRhZDdlOWJkZWUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw=='
      },
      {
        id: 'asd',
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
        image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODE5ZDQ4YTM0ZDE2ZTYyNzk5NmU4ODRhZDdlOWJkZWUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw=='
      }
    ]}

  sectionB = {id: 'sectionB', type: SectionType.NORMAL, name: 'Hamburguesas', products:[
      {
        id: 'asd',
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
        image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODE5ZDQ4YTM0ZDE2ZTYyNzk5NmU4ODRhZDdlOWJkZWUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw=='
      },
      {
        id: 'asd',
        title: 'Bocadillo Kebab de Ternera',
        price: {
          amount: 6.00,
          currency: 'US'
        },
        description: 'Carne de ternera, pollo, lechuga, tomate y mayonesa casera',
        badges: []
      }
    ]}

  sectionC = {id: 'sectionC', type: SectionType.NORMAL, name: 'Pastas', products:[
      {
        id: 'asd',
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
        image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODE5ZDQ4YTM0ZDE2ZTYyNzk5NmU4ODRhZDdlOWJkZWUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw=='
      },
      {
        id: 'asd',
        title: 'Bocadillo Kebab de Ternera',
        price: {
          amount: 6.00,
          currency: 'US'
        },
        description: 'Carne de ternera, pollo, lechuga, tomate y mayonesa casera',
        badges: []
      }
    ]}

  sectionD = {id: 'sectionD', type: SectionType.NORMAL, name: 'Mariscos', products:[
      {
        id: 'asd',
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
        image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODE5ZDQ4YTM0ZDE2ZTYyNzk5NmU4ODRhZDdlOWJkZWUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw=='
      },
      {
        id: 'asd',
        title: 'Bocadillo Kebab de Ternera',
        price: {
          amount: 6.00,
          currency: 'US'
        },
        description: 'Carne de ternera, pollo, lechuga, tomate y mayonesa casera',
        badges: [],
      }
    ]}

  menu: Menu = {
    sections: [
      this.sectionA,
      this.sectionB,
      this.sectionC,
      this.sectionD
    ]
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewCart() {
    this.router.navigate([`/cart/${this.cartId}`])
  }

}

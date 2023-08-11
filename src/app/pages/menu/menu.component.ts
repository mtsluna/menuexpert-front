import { Component, OnInit } from '@angular/core';
import {SectionType} from "../../interfaces/section";
import {Menu} from "../../interfaces/menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  sectionA = {id: 'sectionA', type: SectionType.VISUAL, name: 'Kebabs', products: [
      {
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
        title: 'Bocadillo Kebab de Ternera',
        price: {
          amount: 6.00,
          currency: 'US'
        },
        description: 'Carne de ternera, pollo, lechuga, tomate y mayonesa casera',
        badges: []
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

  constructor() { }

  ngOnInit(): void {
  }

}

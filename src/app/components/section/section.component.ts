import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {Section} from "../../interfaces/section";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  cardWithImage: Product = {
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

  cardWithoutImage: Product = {
    title: 'Bocadillo Kebab de Ternera',
    price: {
      amount: 6.00,
      currency: 'US'
    },
    description: 'Carne de ternera, pollo, lechuga, tomate y mayonesa casera',
    badges: []
  }

  @Input()
  type: string = 'VISUAL';

  @Input()
  section: Section | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

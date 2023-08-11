import { Component, OnInit } from '@angular/core';
import {Answer} from "../../interfaces/answer";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  answers: Array<Answer> = [
    {
      id: 'abc1234',
      name: 'Elige tu tipo de arroz',
      max: 2,
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
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

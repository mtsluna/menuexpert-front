import {Component, EventEmitter, Output} from '@angular/core';
import {Tip} from "../../../../../interfaces/tip";

@Component({
  selector: 'app-tips-selector',
  templateUrl: './tips-selector.component.html',
  styleUrls: ['./tips-selector.component.scss']
})
export class TipsSelectorComponent {

  tipsTypes: Array<Tip> = [
    {
      price: {
        amount: 0,
        currency: {
          code: 'EUR',
          symbol: '',
          name: 'Euro'
        }
      }
    },
    {
      price: {
        amount: 1,
        currency: {
          code: 'EUR',
          symbol: '',
          name: 'Euro'
        }
      }
    },
    {
      price: {
        amount: 2,
        currency: {
          code: 'EUR',
          symbol: '',
          name: 'Euro'
        }
      }
    },
    {
      price: {
        amount: 3,
        currency: {
          code: 'EUR',
          symbol: '',
          name: 'Euro'
        }
      }
    },
    {
      price: {
        amount: 4,
        currency: {
          code: 'EUR',
          symbol: '',
          name: 'Euro'
        }
      }
    }
  ]

  selectedTip: Tip = this.tipsTypes[0]

  @Output()
  amountEvent = new EventEmitter<Tip>();

  onChange(tip: Tip) {
    this.selectedTip = tip;
    this.amountEvent.emit(tip)
  }

}

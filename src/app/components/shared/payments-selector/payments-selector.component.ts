import {Component} from '@angular/core';

@Component({
  selector: 'app-payments-selector',
  templateUrl: './payments-selector.component.html',
  styleUrls: ['./payments-selector.component.scss']
})
export class PaymentsSelectorComponent {

  paymentTypes = [
    {
      id: 1,
      name: 'Efectivo',
      icon: 'assets/icons/efectivo.png'
    },
    {
      id: 2,
      name: 'Mercadopago',
      icon: 'assets/icons/mercado-pago.png'
    },
  ]

}

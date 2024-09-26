import {Component, EventEmitter, Output} from '@angular/core';
import {PaymentType} from "../../../../interfaces/payment-type";

@Component({
  selector: 'app-payments-selector',
  templateUrl: './payments-selector.component.html',
  styleUrls: ['./payments-selector.component.scss']
})
export class PaymentsSelectorComponent {

  @Output()
  paymentTypeEvent = new EventEmitter<PaymentType>();

  paymentTypes: Array<PaymentType> = [
    {
      id: '1',
      name: 'Efectivo',
      icon: 'assets/icons/efectivo.png'
    },
    {
      id: '2',
      name: 'Mercadopago',
      icon: 'assets/icons/mercado-pago.png'
    },
  ]

  onChange(paymentType: PaymentType) {
    this.paymentTypeEvent.emit(paymentType);
  }

}

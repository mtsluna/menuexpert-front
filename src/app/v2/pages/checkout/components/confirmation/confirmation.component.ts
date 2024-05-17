import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit{

  availableTypes: {
    [key: string]: {
      color: string,
      subtitle: string,
      title: string,
      icon: string
    }
  } = {
    success: {
      color: '#28a745',
      subtitle: 'Felicitaciones, su pedido ya esta en proceso',
      title: 'PEDIDO EXITOSO',
      icon: 'done'
    },
    error: {
      color: '#dc3545',
      subtitle: 'Algo salio mal en el checkout. Reintente mas tarde!',
      title: 'PEDIDO ERRONEO',
      icon: 'close'
    },
    default: {
      color: '#dc3545',
      subtitle: 'Algo salio mal en el checkout. \nReintente mas tarde!',
      title: 'PEDIDO ERRONEO',
      icon: 'close'
    }
  }

  availableType = this.availableTypes['default'];

  status: string | null = this.activatedRoute.snapshot.queryParamMap.get('status');

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    if(this.status !== null && this.availableTypes[this.status]) {
      this.availableType = this.availableTypes[this.status]
    }

  }

}

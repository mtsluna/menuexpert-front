import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../../services/cart.service";
import {firstValueFrom} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit{

  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;
  currency!: string;
  productsAmount: number = 0;

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    const cart = await firstValueFrom(this.activatedRoute.data.pipe(map(data => data['cart'])));
    this.currency = await firstValueFrom(this.activatedRoute.data.pipe(map(data => data['currency'])));
    this.productsAmount = cart.amount || 0;
  }

}

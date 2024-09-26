import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../../services/cart.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit{

  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;
  productsAmount: number = 0;

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    const cart = await this.cartService.getApiItems(this.catalogId);
    this.productsAmount = cart.amount || 0;
  }

  get currency() {
    return this.cartService.getCurrency(this.catalogId);
  }

}

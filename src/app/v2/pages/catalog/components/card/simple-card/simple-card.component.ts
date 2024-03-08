import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../../../interfaces/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  @Input()
  product!: Product;
  catalogId: string | undefined = this.activatedRoute.snapshot.paramMap.get('catalogId') || undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  async redirectToDetail() {
    await this.router.navigate([`/detail/${this.product?.id}`], {
      queryParams: {
        catalogId: this.catalogId
      }
    })
  }

  get primaryBadge() {
    return this.product.badges ? this.product?.badges[0] : null;
  }

}

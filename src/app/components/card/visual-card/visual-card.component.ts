import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-visual-card',
  templateUrl: './visual-card.component.html',
  styleUrls: ['./visual-card.component.scss']
})
export class VisualCardComponent implements OnInit {

  @Input()
  product!: Product;
  menuId: string | undefined = this.activatedRoute.snapshot.paramMap.get('menuId') || undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
  }

  async redirectToDetail() {
    await this.router.navigate([`/menu/${this.menuId}/detail/${this.product?.id}`])
  }

  get primaryBadge() {
    return this.product.badges ? this.product?.badges[0] : null;
  }

}

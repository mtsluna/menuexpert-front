import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  @Input()
  product: Product | undefined = undefined;
  menuId: string | undefined = this.activatedRoute.snapshot.paramMap.get('menuId') || undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  async redirectToDetail() {
    await this.router.navigate([`/menu/${this.menuId}/detail/${this.product?.id}`])
  }

}

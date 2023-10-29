import { Component, OnInit } from '@angular/core';
import {SectionType} from "../../interfaces/section";
import {Menu} from "../../interfaces/menu";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {MenuService} from "../../services/menu/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  cartId: string = 'caf6647b-e32d-4629-9d29-e283a570ddfd';

  menu: Menu = {
    id: '',
    name: '',
    sections: [],
    products: []
  };

  constructor(
    private router: Router,
    private cartService: CartService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.menuService.getMenu('97e9b9ad-391d-4507-a357-3db9d7c9f130')
      .subscribe({
        next: (value) => this.menu = value
      })
  }

  viewCart() {
    this.router.navigate([`/cart/${this.cartId}`], {
      queryParams: {
        menuId: this.menu.id
      }
    })
  }

  get hiddenCart() {
    return this.cartService.getItems().length === 0;
  }

}

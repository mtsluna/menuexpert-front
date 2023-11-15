import { Component, OnInit } from '@angular/core';
import {Section, SectionType} from "../../interfaces/section";
import {Menu} from "../../interfaces/menu";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {MenuService} from "../../services/menu/menu.service";
import {Product} from "../../interfaces/product";
import {RestaurantService} from "../../services/restaurant/restaurant.service";
import {zip} from "rxjs";
import {Restaurant} from "../../interfaces/restaurant";

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

  restaurant: Restaurant = {
    id: '',
    name: ''
  }

  constructor(
    private router: Router,
    private cartService: CartService,
    private menuService: MenuService,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    zip(
      this.menuService.getMenu('97e9b9ad-391d-4507-a357-3db9d7c9f130'),
      this.restaurantService.getRestaurantByMenu('97e9b9ad-391d-4507-a357-3db9d7c9f130')
    ).subscribe({
      next: ([menu, restaurant]) => {
        this.menu = menu;
        this.restaurant = restaurant;
      }
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

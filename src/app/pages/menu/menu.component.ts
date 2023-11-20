import { Component, OnInit } from '@angular/core';
import {Section, SectionType} from "../../interfaces/section";
import {Menu} from "../../interfaces/menu";
import {ActivatedRoute, Router} from "@angular/router";
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
  menuId: string | undefined = this.activatedRoute.snapshot.paramMap.get('menuId') || undefined;

  menu: Menu = {
    id: '',
    name: '',
    sections: [],
    products: []
  };

  restaurant: Restaurant = {
    id: '',
    name: '',
    description: '',
    image: undefined
  }

  constructor(
    private router: Router,
    private cartService: CartService,
    private menuService: MenuService,
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    zip(
      this.menuService.getMenu(this.menuId || ''),
      this.restaurantService.getRestaurantByMenu(this.menuId || '')
    ).subscribe({
      next: ([menu, restaurant]) => {
        this.menu = menu;
        this.restaurant = restaurant;
      },
      error: (e) => {
        this.router.navigate(['not-found'])
      }
    })
  }

  viewCart() {
    this.router.navigate([`/cart/${this.cartService.getCartId(this.menuId)}`], {
      queryParams: {
        menuId: this.menu.id
      }
    })
  }

  get hiddenCart() {
    return this.cartService.getItems(this.menuId).length === 0;
  }

}

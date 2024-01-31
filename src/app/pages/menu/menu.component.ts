import { Component, OnInit } from '@angular/core';
import {Category, SectionType} from "../../interfaces/category";
import {Catalog} from "../../interfaces/catalog";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {CatalogService} from "../../services/menu/catalog.service";
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

  catalog: Catalog = {
    id: '',
    name: '',
    categories: [],
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
    private menuService: CatalogService,
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    zip(
      this.menuService.getCatalog(this.menuId || ''),
      this.restaurantService.getRestaurantByMenu(this.menuId || '')
    ).subscribe({
      next: ([catalog, restaurant]) => {
        this.catalog = catalog;
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
        menuId: this.catalog.id
      }
    })
  }

  get hiddenCart() {
    return this.cartService.getItems(this.menuId).length === 0;
  }

}

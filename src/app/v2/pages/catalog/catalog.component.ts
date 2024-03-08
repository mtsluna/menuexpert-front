import { Component } from '@angular/core';
import {Catalog} from "../../../interfaces/catalog";
import {Restaurant} from "../../../interfaces/restaurant";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";
import {CatalogService} from "../../../services/menu/catalog.service";
import {RestaurantService} from "../../../services/restaurant/restaurant.service";
import {zip} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  cartId: string = 'caf6647b-e32d-4629-9d29-e283a570ddfd';
  catalogId: string | undefined = this.activatedRoute.snapshot.paramMap.get('catalogId') || undefined;

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
      this.menuService.getCatalog(this.catalogId || ''),
      this.restaurantService.getRestaurantByMenu(this.catalogId || '')
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
    this.router.navigate([`/cart/${this.cartService.getCartId(this.catalogId)}`], {
      queryParams: {
        menuId: this.catalog.id
      }
    })
  }

  get hiddenCart() {
    return this.cartService.getItems(this.catalogId).length === 0;
  }
}

import { Component, OnInit } from '@angular/core';
import {Catalog} from "../../interfaces/catalog";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {CatalogService} from "../../services/menu/catalog.service";
import {zip} from "rxjs";
import {Store} from "../../interfaces/store";
import {StoreService} from "../../services/store/store.service";

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

  store: Store = {
    id: '',
    name: '',
    description: '',
    image: undefined
  }

  constructor(
    private router: Router,
    private cartService: CartService,
    private menuService: CatalogService,
    private storeService: StoreService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    zip(
      this.menuService.getCatalog(this.menuId || ''),
      this.storeService.getStoreByCatalogId(this.menuId || '')
    ).subscribe({
      next: ([catalog, store]) => {
        this.catalog = catalog;
        this.store = store;
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

}

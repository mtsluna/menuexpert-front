import {Component, OnInit} from '@angular/core';
import {Catalog} from "../../interfaces/catalog";
import {Store} from "../../interfaces/store";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {CatalogService} from "../../services/menu/catalog.service";
import {zip} from "rxjs";
import {StoreService} from "../../services/store/store.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;
  storeId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('store') || undefined;

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
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    localStorage.setItem('base_url', this.router.url)
    if(!this.cartService.getItems().length) {
      this.cartService.getApiItems()
    }
    zip(
      this.menuService.getCatalog(this.catalogId || ''),
      this.storeService.getStoreById(this.storeId || ''),
    ).subscribe({
      next: ([catalog, store]) => {

        if(!catalog.isActive) {
          this.router.navigate(['catalog/not-available'])
          return;
        }

        this.catalog = catalog;
        this.store = store;
      },
      error: (e) => {
        this.router.navigate(['not-found'])
      }
    })
  }

  async viewCart() {
    this.router.navigate([`/cart/${await this.cartService.getCartId()}`], {
      queryParams: {
        catalog: this.catalog.id,
        store: this.storeId
      }
    })
  }

  get hiddenCart() {
    if(!this.store.cartEnabled) {
      return true;
    }

    return this.cartService.getItems().length === 0;
  }
}

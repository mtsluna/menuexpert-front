import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Catalog} from "../../interfaces/catalog";
import {Store} from "../../interfaces/store";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {CatalogService} from "../../services/menu/catalog.service";
import {zip} from "rxjs";
import {StoreService} from "../../services/store/store.service";
import {UserService} from "../../services/auth/user.service";
import {SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;
  storeId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('store') || undefined;
  storeName: string | undefined = this.activatedRoute.snapshot.paramMap.get('storeName') || undefined;

  @ViewChild("googleId", { static: false })
  googleButton!: ElementRef<HTMLDivElement>;

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

  socialUser!: SocialUser;

  constructor(
    private router: Router,
    private cartService: CartService,
    private menuService: CatalogService,
    private storeService: StoreService,
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
  ) {}

  ngOnInit(): void {

    if (this.storeName) {
      this.storeService.getStoreByName(this.storeName).subscribe({
        next: (store) => {
          this.storeId = store.id;
          this.cartService.storeId = store.id || null;
          this.store = store;
          if(!this.cartService.getItems().length) {
            this.cartService.getApiItems()
          }
          this.menuService.getCatalogByStoreId(this.storeId || '').subscribe({
            next: (catalog) => {
              this.catalog = catalog;
            }
          })
        },
        error: (e) => {
          this.router.navigate(['not-found'])
        }
      })

    }

    localStorage.setItem('base_url', this.router.url)


    if(this.catalogId && this.storeId) {
      zip(
        this.menuService.getCatalog(this.catalogId || ''),
        this.storeService.getStoreById(this.storeId || ''),
      ).subscribe({
        next: ([catalog, store]) => {

          if(!catalog.isActive) {
            this.router.navigate(['catalog/not-available'])
            return;
          }

          this.cartService.storeId = store.id || null;

          if(!this.cartService.getItems().length) {
            this.cartService.getApiItems()
          }
          this.catalog = catalog;
          this.store = store;
        },
        error: (e) => {
          this.router.navigate(['not-found'])
        }
      })
    }
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

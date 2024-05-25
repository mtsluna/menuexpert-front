import {Catalog} from "./catalog";
import {Store} from "./store";

export interface Qr {
  id: string;
  defaultCatalog: Catalog;
  store: Store;
  isActive: boolean;
}

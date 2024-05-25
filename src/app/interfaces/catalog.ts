import {Category} from "./category";
import {Product} from "./product";

export interface Catalog {
  id?: string;
  name?: string;
  isActive?:string;
  categories?: Array<Category>;
  products?: Array<Product>;
}

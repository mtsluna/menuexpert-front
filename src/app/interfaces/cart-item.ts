import {Product} from "./product";
import {Option} from "./option";

export interface CartItem {
  product?:Product;
  comment: string;
  selections: Array<Selection>;
}

export interface Selection {
  id: string;
  selected: Array<Option | boolean>
}

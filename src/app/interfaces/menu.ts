import {Section} from "./section";
import {Product} from "./product";

export interface Menu {
  id?: string;
  name?: string;
  sections?: Array<Section>;
  products?: Array<Product>;
}

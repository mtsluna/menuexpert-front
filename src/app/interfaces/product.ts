import {Price} from "./price";
import {Badge} from "./badge";

export interface Product {
  title: string;
  price: Price;
  description: string;
  badges: Array<Badge>;
  image?: string;
}


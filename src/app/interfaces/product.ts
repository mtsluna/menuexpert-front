import {Price} from "./price";
import {Badge} from "./badge";
import {Answer} from "./answer";

export interface Product {
  id: string;
  title: string;
  price: Price;
  description: string;
  badges?: Array<Badge>;
  image?: string;
  answers?: Array<Answer>;
}


import {Price} from "./price";
import {Badge} from "./badge";
import {Answer} from "./answer";
import {Category} from "./category";

export interface Product {
  id: string;
  title: string;
  price: Price;
  description: string;
  badges?: Array<Badge>;
  image?: string;
  answers?: Array<Answer>;
  sectionId?: string;
  category?: Category;
}


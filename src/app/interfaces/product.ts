import {Price} from "./price";
import {Badge} from "./badge";
import {Customization} from "./customization";
import {Category} from "./category";

export interface Product {
  id: string;
  title: string;
  price: Price;
  description: string;
  badges?: Array<Badge>;
  image?: string;
  isVisible?:boolean;
  isActive?:boolean;
  customizations?: Array<Customization>;
  sectionId?: string;
  category?: Category;
}


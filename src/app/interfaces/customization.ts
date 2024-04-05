import {Product} from "./product";

export interface Customization {
  id: string;
  name: string;
  max: number;
  options: Array<Product>;
}

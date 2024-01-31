import {Product} from "./product";

export enum SectionType {
  VISUAL = 'VISUAL',
  NORMAL = 'NORMAL'
}

export interface Category {
  id: string;
  name: string;
  products: Array<Product>;
  categoryType: SectionType;
  order: number;
}

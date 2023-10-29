import {Product} from "./product";

export enum SectionType {
  VISUAL = 'VISUAL',
  NORMAL = 'NORMAL'
}

export interface Section {
  id: string;
  name: string;
  products: Array<Product>;
  type: SectionType;
}

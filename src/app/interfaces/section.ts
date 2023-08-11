import {Product} from "./product";

export enum SectionType {
  VISUAL = 'visual',
  NORMAL = 'normal'
}

export interface Section {
  id: string;
  name: string;
  products: Array<Product>;
  type: SectionType;
}

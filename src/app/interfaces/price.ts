import {Currency} from "./currency";

export interface Price {
  amount: number;
  discount: number;
  currency: Currency;
}


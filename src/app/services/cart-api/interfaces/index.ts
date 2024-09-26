import {CartItem} from "../../../interfaces/cart-item";

export interface ICartApiCreateResponse {
    id: string;
    amount?: number;
    items: CartItem[];
}

import { Product } from '../models/product';

export class CartItem {
    product: Product | null = null;
    quantity: number | null = null;
}
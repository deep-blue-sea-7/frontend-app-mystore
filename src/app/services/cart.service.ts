import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartitem';
import { Order } from '../models/order';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = [];
  totalItemInCart = new BehaviorSubject<number>(0);;

  order: Order = {
    customerName: '',
    customerAddress: '',
    totalAmount: 0,
    creditCardNumber: 0,
  };
  
  constructor() { }

  getCart() {
    return this.cart;
  }
  
  addToCart(cartItem: CartItem) {
    if (this.cart.find(item => item!.product!.id === cartItem!.product!.id)) {
      this.updateItemQuantity(cartItem!.product!.id, cartItem!.quantity!);
    } else {
    this.cart.push(cartItem);
    }
    this.totalItemInCart.next(this.getTotalItemsInCart());
    return this.cart;
  }

  createOrder(name: string, address: string, amount: number, ccNumber: number): void {
    this.order = { customerName: name, customerAddress: address, totalAmount: amount, creditCardNumber: ccNumber};
  }

  getOrder(): Order {
    return this.order;
  }

  getOrderPrice() : number { 
    return this.cart.reduce((a, b) => { return a + b.quantity! * b.product!.price; }, 0);
  }

  getTotalAmount(): number {
    const totalAmount: number = this.cart.reduce((previous, current) => { return previous + (current.quantity! * current.product!.price); }, 0);
    return this.formatAmount(totalAmount);
  }

  updateItemQuantity(id: number, quantity: number) {
    this.cart = this.cart.map(item => {
      if (item.product?.id === id) {
        return {...item, quantity: quantity};
      }
      return item;
    });
    this.totalItemInCart.next(this.getTotalItemsInCart());
    return this.getCart();
  }

  clearCart() {
    this.cart = [];
    this.totalItemInCart.next(this.getTotalItemsInCart());
    return this.cart;
  }

  deleteItem(id: number) {
    this.cart = this.cart.filter((item) => item?.product?.id !== id);
    this.totalItemInCart.next(this.getTotalItemsInCart());
    return this.cart;
  }

  getTotalItemsInCart(): number {
    let totalItems: number = 0;

    this.cart.forEach(item => totalItems += Number(item!.quantity!));
    return totalItems; 
  }

  formatAmount(amount: number) {
    return parseFloat(amount.toFixed(2));
  }
}

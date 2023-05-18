import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartitem';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart!: CartItem[];
  totalAmount: number | null = null;

  fullName: string = '';
  address: string = '';
  creditCardNumber: number | null = null;
  
  showCreditCardWarning: boolean = false;

  constructor(private cartService: CartService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalAmount = this.cartService.getTotalAmount();
  }

  onSubmit(): void {
    this.cartService.createOrder(this.fullName, this.address, this.totalAmount as number, this.creditCardNumber as number);
    this.cartService.clearCart();
    this.getConfirmation();

  }

  getConfirmation(): void {
    this.router.navigate(['/confirmation']);
  }
  
  clearCart(): void {
    this.cartService.clearCart();
    this.cart = [];
  }

  handleQuantityUpdatEvent(item: CartItem, event: number ) {
    this.updateQuantityAndAmount(item, event);
  } 

  handleItemRemoval(item: CartItem) {
    this.cart = this.cartService.deleteItem(item!.product!.id);
    this.updateQuantityAndAmount(item, 0);
    this.notificationService.success('Removed ' + item!.product!.name + ' from your cart', '');
  }

  updateQuantityAndAmount(item: CartItem, orderQuantity: number) {
    if (item.product != null) {
      this.cartService.updateItemQuantity(item.product.id, orderQuantity);
      this.totalAmount = this.cartService.getTotalAmount();
    }
  }

  validateCreditCardNumber(event: any) {
    this.showCreditCardWarning = false;
    const digits = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (event.keyCode != 8 && !digits.test(inputChar)) {
      this.showCreditCardWarning = true;
      event.preventDefault();
    }
  }
  
  updateOrderTotalAmount(): void {
    this.totalAmount = parseFloat(this.cartService.getTotalAmount().toFixed(2));
  }

}

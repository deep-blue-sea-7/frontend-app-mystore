import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cartitem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{

  quantity: number = 1;
  
  @Input() product!: Product;
  @Input() showDescription: boolean;
  @Input() showBackLink: boolean;
  @Output() addToCart: EventEmitter<CartItem> = new EventEmitter;

  constructor(private cartService: CartService, private notificationService: NotificationService) {
    this.showDescription = false;
    this.showBackLink = false;
    this.product = {
      id: 1,
      name: 'Bag',
      price: 110,
      imageUrl: 'URL',
      description: 'Leather Bag'
    }
  }

  ngOnInit(): void {
  }

  addProductToCart(product: Product, quantity: number): void {
    this.notificationService.success(((quantity == 1) ? product.name : product.name + " items") + " added to cart", '');

    this.cartService.addToCart({ product: product, quantity: quantity });
  }

}

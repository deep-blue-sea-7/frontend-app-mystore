import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  totalItemsInCart: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.totalItemInCart.subscribe(count => this.totalItemsInCart = count);
  }

  getTotalItemsInCart(): void {
    this.totalItemsInCart = this.cartService.getTotalItemsInCart();
  }

}

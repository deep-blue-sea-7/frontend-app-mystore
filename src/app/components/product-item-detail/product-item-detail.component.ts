import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {

  showDescription: boolean = true;
  style: string = '';

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    imageUrl: '',
    description: '',
  };
  id: number = 0;

  constructor (private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.productService.getProducts().subscribe((products) => {
      this.product = products.filter((p) => p.id === this.id)[0];
    });
  }
  
}

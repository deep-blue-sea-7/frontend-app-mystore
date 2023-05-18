export class Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;

  constructor() {
    this.id = 1;
    this.name = '';
    this.price = 1;
    this.imageUrl = '';
    this.description = '';
  }
}
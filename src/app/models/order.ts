export class Order {
  customerName: string;
  customerAddress: string;
  totalAmount: number;
  creditCardNumber: number;

  constructor() {
    this.customerName = '';
    this.customerAddress = '';
    this.totalAmount = 0;
    this.creditCardNumber = 0;
  }
}
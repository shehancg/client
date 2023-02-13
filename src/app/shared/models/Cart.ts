export class Cart {
  items: any = [];
  food: any;
  quantity: any;
  totalPrice: number = 0;
  totalCount: number = 0;

  get Price(): number {
    return this.food.price * this.quantity;
  }
}

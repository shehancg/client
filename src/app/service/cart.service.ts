import {Injectable} from '@angular/core';
import {Cart} from "../shared/models/Cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart!: Cart

  constructor() {
    this.cart = new Cart()
  }

  addToCart(item: any): void {
    console.log("********", item)
    let cartItem = this.cart.items.find((value: any) => value._id === item._id)
    console.log("======================", cartItem)
    if (cartItem) {
      this.changeQuantity(item._id, cartItem.Quantity + 1);
      return;
    }
    item.Quantity = 1
    this.cart.items.push(item);
    this.cart.totalCount = this.cart.items.length
    this.cart.totalPrice += item.price

    this.sort()
  }

  removeFromCart(itemId: string): void {
    const item = this.cart.items.find((item: any) => item._id === itemId)
    const itemList = this.cart.items.filter((item: any) => item._id != itemId)
    if (item) {
      this.cart.totalPrice -= item.price
      this.cart.totalCount -= item.Quantity
    }
    this.cart.items = itemList

    this.sort()
  }

  changeQuantity(itemId: string, quantity: number) {
    console.log(itemId, quantity)
    let cartItem: any = this.cart.items.find((item: any) => item._id === itemId);
    const itemList = this.cart.items.filter((item: any) => item._id != itemId)
    this.cart.items = itemList

    if (quantity === cartItem.Quantity) {
      this.cart.totalCount += 1

      this.cart.totalCount -= 1
      cartItem.Quantity = 1
      this.cart.totalPrice -= cartItem.price
      cartItem.Quantity = quantity
      itemList.push(cartItem)
    }

    if (quantity < cartItem.Quantity) {
      const difference = cartItem.Quantity - quantity

      this.cart.totalCount -= difference
      cartItem.Quantity = difference
      this.cart.totalPrice -= cartItem.price
      cartItem.Quantity = quantity
      itemList.push(cartItem)
    } else if (quantity > cartItem.Quantity) {
      const difference = quantity - cartItem.Quantity

      this.cart.totalCount += difference

      this.cart.totalPrice -= cartItem.price
      cartItem.Quantity = quantity
      this.cart.totalPrice += cartItem.price
      itemList.push(cartItem)
    }
    this.cart.totalPrice = 0
    this.cart.items.forEach((item: any) => {
      this.cart.totalPrice += item.Quantity * item.price
    })

    this.sort()
  }

  getCart(): Cart {
    return this.cart;
  }

  private sort() {
    if (this.cart.items.length !== 0) {
      const cart = this.cart.items.sort((str1: any, str2: any) => (str1.name > str2.name) ? 1 : -1)
      this.cart.items = cart
    }
  }
}

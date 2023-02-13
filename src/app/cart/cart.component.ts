import {Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: any

  constructor(private _cartService: CartService) {
  }

  ngOnInit(): void {
    this.cart = this._cartService.getCart()
    console.log("Cart ===>>>", this.cart)
  }

  onStepUpHandler(qty: number, itemId: string) {
    this._cartService.changeQuantity(itemId, qty)
  }

  onStepDownHandler(qty: number, itemId: string) {
    if (qty < 1) {
      this._cartService.removeFromCart(itemId)
      return
    }
    this._cartService.changeQuantity(itemId, qty)
  }
}

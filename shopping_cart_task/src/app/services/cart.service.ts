import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  title: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  addToCart(product: CartItem) {
    this.cartItems.push(product);
    this.updateCartState();
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem !== item);
    this.updateCartState();
  }

  private updateCartState() {
    this.cartItemsSubject.next([...this.cartItems]);
    this.cartCount.next(this.cartItems.length);
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }
}

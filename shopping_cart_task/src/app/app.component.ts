import {
  Component,
  OnInit,
  PLATFORM_ID,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { CartService } from './services/cart.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'shopping_cart_task';
  cartItemCount = 0;

  constructor(
    public cartService: CartService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartItemCount = count;
    });
  }

  addToCart(product: { title: string; price: number; image: string }) {
    console.log('🛒 Adding to cart:', product);
    alert(`${product.title} added to cart!`);
    this.cartService.addToCart(product);
  }

  goToCartPage() {
    console.log('Navigating to cart page...');
    this.router.navigate(['/cart']);
  }

  get totalCartItems(): number {
    return this.cartItemCount;
  }

  onCartIconClick() {
    if (this.totalCartItems > 0) {
      console.log('🛒 Navigating to cart page...');
      this.router.navigate(['/cart']);
    } else {
      alert('Your cart is empty! 🛒');
    }
  }

  isProfileOpen: boolean = false;

  onProfileClick() {
    this.isProfileOpen = !this.isProfileOpen;
  }

  isShareOpen = false;

  onShareClick() {
    this.isShareOpen = !this.isShareOpen;
  }
  copyLink() {
    const link = document.getElementById('share-url')?.textContent;
    if (link) {
      navigator.clipboard.writeText(link);
      alert('Link copied to clipboard!');
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }
}

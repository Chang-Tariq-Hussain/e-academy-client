import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  logoUrl = signal<string>('/assets/e-academy-logo.png');
  treeImageUrl = signal<string>('/assets/hero-section-tree.jpg');
  aboutImageUrl = signal<string>('/assets/about.jpg');

  setLogo(url: string) {
    this.logoUrl.set(url);
  }
}

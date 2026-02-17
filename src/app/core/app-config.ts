import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  logoUrl = signal<string>('/assets/e-academy-logo.png');

  setLogo(url: string) {
    this.logoUrl.set(url);
  }
}

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly _localStorage: Storage | null;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this._localStorage = localStorage;
    } else {
      this._localStorage = null;
    }
  }

  getItem(key: string): string | null {
    return this._localStorage ? this._localStorage.getItem(key) : null;
  }

  setItem(key: string, value: string): void {
    if (this._localStorage) {
      this._localStorage.setItem(key, value);
    }
  }

  removeItem(key: string): void {
  }

  clear(): void {
    if (this._localStorage) {
      this._localStorage.clear();
    }
  }
}

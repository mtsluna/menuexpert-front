import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private readonly _window: Window | null;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this._window = window;
    } else {
      this._window = null;
    }
  }

  get nativeWindow(): Window | null {
    return this._window;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private event: boolean = false;

  constructor() { }

  getEvent() {
    return this.event;
  }

  setEvent(event: boolean) {
    this.event = event;
  }
}

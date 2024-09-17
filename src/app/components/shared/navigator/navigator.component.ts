import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {

  @Input() customNavigation: string = '';

  constructor(private location: Location) {
  }

  back() {
    this.location.back();
  }

  navigateTo() {
    window.location.href = this.customNavigation;
  }

}

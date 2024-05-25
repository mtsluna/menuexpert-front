import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-allowed-devices',
  templateUrl: './allowed-devices.component.html',
  styleUrls: ['./allowed-devices.component.scss']
})
export class AllowedDevicesComponent implements OnInit {

  showBanner: boolean = false;

  ngOnInit() {
    this.checkResolution();
  }

  @HostListener('window:resize', ['$event'])
  onResize(_: Event) {
    this.checkResolution();
  }

  private checkResolution() {
    const width = window.innerWidth;
    const isMobileOrTablet = width <= 1024;
    this.showBanner = !isMobileOrTablet;
  }

}

import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { WindowService } from "./services/window/window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'menuexpert-front';
  showBanner: boolean = false;

  constructor(
    private translate: TranslateService,
    private windowService: WindowService
  ) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit() {
    this.checkResolution();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkResolution();
  }

  private checkResolution() {
    const width = this.windowService.nativeWindow?.innerWidth || 0;
    const isMobileOrTablet = width <= 1024;

    this.showBanner = !isMobileOrTablet;
  }
}

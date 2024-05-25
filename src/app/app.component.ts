import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'menuexpert-front';
  showBanner: boolean = false;

  constructor(private translate: TranslateService) {
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
    const width = window.innerWidth;
    const isMobileOrTablet = width <= 1024;

    this.showBanner = !isMobileOrTablet;
  }
}

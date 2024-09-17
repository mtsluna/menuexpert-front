import { Component, HostListener, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import {Category} from "../../../../interfaces/category";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: 'app-section-selector',
  templateUrl: './section-selector.component.html',
  styleUrls: ['./section-selector.component.scss']
})
export class SectionSelectorComponent implements OnInit, OnChanges {

  @Input()
  sections: Array<Category> | undefined;
  sectionsPosition: { id: string, yValue: number }[] = [];
  selected: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if(this.sections && this.sections[0]) {
      this.selected = this?.sections[0]?.id;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (isPlatformBrowser(this.platformId)) {
      this.sectionsPosition = (this.sections?.map((category) => ({
        id: category.id,
        yValue: document.getElementById(category.id)?.getClientRects()[0].y || 0
      }))) || []
    }
  }

  onClick(id: string) {
    const elem = document.getElementById(id);

    elem?.scrollIntoView();
  }

  @HostListener('window:scroll', ['$event'])
  detectPosition() {
    if (isPlatformBrowser(this.platformId)) {
      this.sectionsPosition = (this.sections?.map((category) => ({
        id: category.id,
        yValue: window.scrollY + (document.getElementById(category.id)?.getBoundingClientRect().y || 0)
      }))) || [];

      this.sectionsPosition.sort((a, b) => a.yValue - b.yValue)


      let [actual] = this.sectionsPosition
        .filter((elem) => elem.yValue - 170 < window.scrollY)
        .slice(-1);

      if (!actual) {
        [actual] = this.sectionsPosition.slice(0, 1);
      }

      this.selected = actual.id || ''
    }
  }

}

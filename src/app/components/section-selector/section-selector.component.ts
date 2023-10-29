import {Component, Input, OnInit} from '@angular/core';
import {Section} from "../../interfaces/section";

@Component({
  selector: 'app-section-selector',
  templateUrl: './section-selector.component.html',
  styleUrls: ['./section-selector.component.scss']
})
export class SectionSelectorComponent implements OnInit {

  @Input()
  sections: Array<Section> | undefined;
  selected: string = '';

  constructor() { }

  ngOnInit(): void {
    if(this.sections && this.sections[0]) {
      this.selected = this?.sections[0]?.id;
    }
  }

  onClick(id: string) {
    this.selected = id;
    const elem = document.getElementById(id);

    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  }

}

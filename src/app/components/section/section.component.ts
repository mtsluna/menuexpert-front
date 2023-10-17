import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {Section} from "../../interfaces/section";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input()
  type: string = 'VISUAL';

  @Input()
  section: Section | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

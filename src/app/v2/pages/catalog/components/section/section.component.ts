import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../../interfaces/product";
import {Category} from "../../../../../interfaces/category";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input()
  type: string = 'VISUAL';

  @Input()
  category: Category | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

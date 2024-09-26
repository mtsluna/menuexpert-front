import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../interfaces/product";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input()
  product!:Product;

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../interfaces/product";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input()
  product!:Product

  constructor() { }

  ngOnInit(): void {
  }

}

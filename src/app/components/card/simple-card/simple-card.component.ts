import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  @Input()
  product: Product | undefined = undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async redirectToDetail() {
    await this.router.navigate(['/detail'])
  }

}

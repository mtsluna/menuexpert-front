import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../interfaces/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-visual-card',
  templateUrl: './visual-card.component.html',
  styleUrls: ['./visual-card.component.scss']
})
export class VisualCardComponent implements OnInit {

  @Input()
  product: Product | undefined = undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async redirectToDetail() {
    await this.router.navigate(['/detail'])
  }

}

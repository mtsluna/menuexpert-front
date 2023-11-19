import {Component, Input} from '@angular/core';
import {Restaurant} from "../../../interfaces/restaurant";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {

  @Input()
  restaurant!:Restaurant;

}

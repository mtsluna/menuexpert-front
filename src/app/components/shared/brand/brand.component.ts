import {Component, Input} from '@angular/core';
import {Store} from "../../../interfaces/store";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {

  @Input()
  store!:Store;

}

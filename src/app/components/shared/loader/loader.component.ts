import {Component, Input} from '@angular/core';
import {LoaderService} from "../../../services/loader/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  @Input()
  loader: boolean | undefined = false;

  constructor(private loaderService: LoaderService) {
  }

  get loaderValue() {
    return this.loader || this.loaderService.getEvent();
  }

}

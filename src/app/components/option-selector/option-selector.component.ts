import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../../interfaces/answer";

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.scss']
})
export class OptionSelectorComponent implements OnInit {

  @Input()
  answer: Answer | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

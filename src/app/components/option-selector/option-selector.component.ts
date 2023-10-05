import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../../interfaces/answer";
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Option} from "../../interfaces/option";

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.scss']
})
export class OptionSelectorComponent implements OnInit {

  @Input()
  answer!: Answer;

  @Input()
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
  }

  changeSelection(id: string) {

  }

  show() {
    console.log(this.form?.getRawValue())
  }

}

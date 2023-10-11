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

  show() {
    console.log(this.form?.getRawValue())
  }

  changePick(event: any, index: number, option: Option) {
    const newValue = (event.checked) ? option : false;
    (this.form.get('selected') as FormArray).at(index).setValue(newValue)
  }

  makeOption(index: number, option: Option) {
    return this.answer?.options.map((k, internalIndex) => {
      return (internalIndex === index) ? option : false
    })
  }
}

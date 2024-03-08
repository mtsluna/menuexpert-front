import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../../../../../interfaces/answer";
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Option} from "../../../../../interfaces/option";
import {CartItem} from "../../../../../interfaces/cart-item";

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
    const formArray = (this.form.get('selected') as FormArray)

    const newValue = (event.checked) ? option : false;
    formArray.at(index).setValue(newValue)

    const array = formArray.getRawValue();

    const optionsSelected = array.filter((value) => value != false).length;

    array.forEach((value, index) => {
      if(optionsSelected == this.answer.max && value == false) {
        formArray.at(index).disable();
      } else {
        formArray.at(index).enable();
      }
    })
  }

  makeOption(index: number, option: Option) {
    return this.answer?.options.map((k, internalIndex) => {
      return (internalIndex === index) ? option : false
    })
  }

  getChecked(index: number) {
    return !!this.form.getRawValue().selected[index]
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Customization} from "../../../../interfaces/customization";
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Option} from "../../../../interfaces/option";
import {CartItem} from "../../../../interfaces/cart-item";
import {Product} from "../../../../interfaces/product";

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.scss']
})
export class OptionSelectorComponent implements OnInit {

  @Input()
  customization!: Customization;

  @Input()
  form!: FormGroup;

  @Input()
  enabled!: boolean;

  constructor() {}

  ngOnInit(): void {
  }

  changePick(event: any, index: number, product: Product) {
    const formArray = (this.form.get('selected') as FormArray)

    const newValue = (event.checked) ? product : false;
    formArray.at(index).setValue(newValue)

    const array = formArray.getRawValue();

    const optionsSelected = array.filter((value) => value != false).length;

    array.forEach((value, index) => {
      if(value !== false && !value.isActive) {
        formArray.at(index).disable();
        return;
      }

      if(((optionsSelected == this.customization.max && value == false) || !this.customization.options[index].isActive)) {
        formArray.at(index).disable();
      } else {
        formArray.at(index).enable();
      }
    })
  }

  makeProduct(index: number, product: Product) {
    return this.customization?.options.map((k, internalIndex) => {
      return (internalIndex === index) ? product : false
    })
  }

  getChecked(index: number) {
    return this.form.getRawValue().selected.findIndex((value: any) => value != false) === index;
    //return index === this.customization.options.map((product) => product.isActive).indexOf(true);
  }
}

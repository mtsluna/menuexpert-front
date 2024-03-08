import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Form, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss']
})
export class QuantitySelectorComponent {

  @Input()
  form: FormGroup = this.formBuilder.group({
    quantity: [1]
  });

  @Input()
  origin: string = 'other';

  @Output()
  quantityEvent = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) {
  }

  add() {
    if(this.quantity < 99) {
      const actual = this.form.get('quantity')?.getRawValue() + 1;
      this.form.get('quantity')?.setValue(actual);
      this.quantityEvent.emit(this.form)
    }
  }

  remove() {
    if(this.quantity > 0) {
      const actual = this.form.get('quantity')?.getRawValue() - 1;
      this.form.get('quantity')?.setValue(actual);
      this.quantityEvent.emit(this.form)
    }
  }

  get quantity() {
    return this.form.get('quantity')?.getRawValue() as number
  }

}

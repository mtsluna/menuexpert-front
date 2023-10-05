import { Component, OnInit } from '@angular/core';
import {Answer} from "../../interfaces/answer";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {reduce, retry} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  form!: FormGroup;
  answers: Array<Answer> = [
    {
      id: 'abc1234',
      name: 'Elige tu tipo de arroz',
      max: 1,
      options: [
        {
          id: 'abc1234a',
          name: 'Normal',
          price: 0
        },
        {
          id: 'abc1234b',
          name: 'Integral',
          price: 0
        },
        {
          id: 'abc1234b',
          name: 'Mixto',
          price: 0
        }
      ]
    },
    {
      id: 'abc1234',
      name: 'Elige la proteina',
      max: 2,
      options: [
        {
          id: 'abc1234a',
          name: 'Carne',
          price: 0
        },
        {
          id: 'abc1234b',
          name: 'Pollo',
          price: 0
        },
        {
          id: 'abc1234b',
          name: 'Cerdo',
          price: 1.99
        }
      ]
    }
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  initForm() {
    return this.formBuilder.group({
      comment: [''],
      selections: this.formBuilder.array(this.answers?.map((answer) => {
        return this.formBuilder.group({
          id: [answer?.id],
          selected: [[answer?.options[0]?.id || '']]
        });
      }))
    });
  }

  getFormElement(index: number) {
    return (this.form.get('selections') as FormArray).at(index) as FormGroup;
  }

  show() {
    console.log(this.form.getRawValue())
  }

}

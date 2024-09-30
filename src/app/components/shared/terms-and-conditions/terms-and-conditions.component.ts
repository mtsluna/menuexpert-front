import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [
    MatIcon,
    MatMiniFabButton,
    ReactiveFormsModule,
    MatDialogClose
  ],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss'
})
export class TermsAndConditionsComponent {

}

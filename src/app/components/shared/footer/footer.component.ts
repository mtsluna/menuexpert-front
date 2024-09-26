import { Component } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ContactComponent} from "../contact/contact.component";
import {AuthService} from "../../../services/auth/auth.service";
import {firstValueFrom} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
    private authService: AuthService,
    private snackBar: MatSnackBar
    ) {
  }

  get hasCartItems() {
    return this.cartService.getItems().length !== 0;
  }

  async openContact() {
    const userGoogle = await firstValueFrom(this.authService.getUser())

    const contactRef = this.matDialog.open(ContactComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      data: {
        userGoogle
      }
    })

    contactRef.afterClosed().subscribe((response) => {
      if(!response?.status) {
        return;
      }

      if(response.error) {
        this.snackBar.open(response.error, 'close', {
          duration: 3000
        })
        return;
      }

      this.snackBar.open(response.message, 'close', {
        duration: 3000
      })
    })
  }

}

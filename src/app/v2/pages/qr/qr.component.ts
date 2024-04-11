import { Component } from '@angular/core';
import {QrService} from "../../../services/qr/qr.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent {

  constructor(private qrService: QrService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.qrService.getDefaultCatalogByQr(this.activatedRoute.snapshot.paramMap.get('id') || '')
      .subscribe({
        next: async value => {
          await this.router.navigate([`/catalog/${value.defaultCatalog.id}`], {
            queryParams: {
              qr: value.id,
              catalog: value.defaultCatalog.id
            }
          })
        }, error: async _ => {
          await this.router.navigate(['not-found'])
        }
      });
  }

}

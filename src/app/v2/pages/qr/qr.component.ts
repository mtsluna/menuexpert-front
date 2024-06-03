import {Component, OnInit} from '@angular/core';
import {QrService} from "../../../services/qr/qr.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Meta} from "@angular/platform-browser";

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
          if(!value.isActive) {
            await this.router.navigate(['qr/not-available'])
            return;
          }

          await this.router.navigate([`/s/${value.store.url}`], {
            queryParams: {
              qr: value.id,
              catalog: value.defaultCatalog.id,
              store: value.store.id
            }
          })
        }, error: async _ => {
          await this.router.navigate(['not-found'])
        }
      });
  }

}

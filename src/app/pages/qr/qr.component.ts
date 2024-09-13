import {Component, OnInit} from '@angular/core';
import {QrService} from "../../services/qr/qr.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Meta} from "@angular/platform-browser";
import {AngularFireAnalytics} from "@angular/fire/compat/analytics";

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent {

  constructor(
    private qrService: QrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private analytics: AngularFireAnalytics
  ) {

    const id= this.activatedRoute.snapshot.paramMap.get('id') || ''

    this.qrService.getDefaultCatalogByQr(id)
      .subscribe({
        next: async value => {
          this.analytics.logEvent('qr_scan', {
            qrId: id,
            storeId: value.store.id
          })

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

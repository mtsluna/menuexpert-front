import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrNotAvailableComponent } from './qr-not-available.component';

describe('NotAvailableComponent', () => {
  let component: QrNotAvailableComponent;
  let fixture: ComponentFixture<QrNotAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrNotAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrNotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsSelectorComponent } from './payments-selector.component';

describe('PaymentsSelectorComponent', () => {
  let component: PaymentsSelectorComponent;
  let fixture: ComponentFixture<PaymentsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

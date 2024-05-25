import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNotAvailableComponent } from './catalog-not-available.component';

describe('CatalogNotAvailableComponent', () => {
  let component: CatalogNotAvailableComponent;
  let fixture: ComponentFixture<CatalogNotAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogNotAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogNotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

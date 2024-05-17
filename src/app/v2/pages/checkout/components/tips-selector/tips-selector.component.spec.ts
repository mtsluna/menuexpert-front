import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsSelectorComponent } from './tips-selector.component';

describe('TipsSelectorComponent', () => {
  let component: TipsSelectorComponent;
  let fixture: ComponentFixture<TipsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

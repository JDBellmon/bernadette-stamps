import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainProductsComponent } from './partial-main-products.component';

describe('PartialMainProductsComponent', () => {
  let component: PartialMainProductsComponent;
  let fixture: ComponentFixture<PartialMainProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainProductsComponent]
    });
    fixture = TestBed.createComponent(PartialMainProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

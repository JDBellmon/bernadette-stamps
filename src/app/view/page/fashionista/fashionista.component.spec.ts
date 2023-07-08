import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionistaComponent } from './fashionista.component';

describe('FashionistaComponent', () => {
  let component: FashionistaComponent;
  let fixture: ComponentFixture<FashionistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionistaComponent]
    });
    fixture = TestBed.createComponent(FashionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

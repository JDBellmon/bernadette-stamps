import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainFashionistaComponent } from './partial-main-fashionista.component';

describe('PartialMainFashionistaComponent', () => {
  let component: PartialMainFashionistaComponent;
  let fixture: ComponentFixture<PartialMainFashionistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainFashionistaComponent]
    });
    fixture = TestBed.createComponent(PartialMainFashionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

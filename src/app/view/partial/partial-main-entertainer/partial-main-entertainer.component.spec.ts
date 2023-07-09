import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainEntertainerComponent } from './partial-main-entertainer.component';

describe('PartialMainEntertainerComponent', () => {
  let component: PartialMainEntertainerComponent;
  let fixture: ComponentFixture<PartialMainEntertainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainEntertainerComponent]
    });
    fixture = TestBed.createComponent(PartialMainEntertainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

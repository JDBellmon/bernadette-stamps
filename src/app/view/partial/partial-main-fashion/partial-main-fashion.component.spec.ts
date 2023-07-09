import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainFashionComponent } from './partial-main-fashion.component';

describe('PartialMainFashionComponent', () => {
  let component: PartialMainFashionComponent;
  let fixture: ComponentFixture<PartialMainFashionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainFashionComponent]
    });
    fixture = TestBed.createComponent(PartialMainFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

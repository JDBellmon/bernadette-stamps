import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainContactComponent } from './partial-main-contact.component';

describe('PartialMainContactComponent', () => {
  let component: PartialMainContactComponent;
  let fixture: ComponentFixture<PartialMainContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainContactComponent]
    });
    fixture = TestBed.createComponent(PartialMainContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

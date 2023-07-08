import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainerComponent } from './entertainer.component';

describe('EntertainerComponent', () => {
  let component: EntertainerComponent;
  let fixture: ComponentFixture<EntertainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntertainerComponent]
    });
    fixture = TestBed.createComponent(EntertainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

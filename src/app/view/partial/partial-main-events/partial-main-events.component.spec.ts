import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainEventsComponent } from './partial-main-events.component';

describe('PartialMainEventsComponent', () => {
  let component: PartialMainEventsComponent;
  let fixture: ComponentFixture<PartialMainEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainEventsComponent]
    });
    fixture = TestBed.createComponent(PartialMainEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

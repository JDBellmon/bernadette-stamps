import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRouteComponent } from './active-route.component';

describe('ActiveRouteComponent', () => {
  let component: ActiveRouteComponent;
  let fixture: ComponentFixture<ActiveRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveRouteComponent]
    });
    fixture = TestBed.createComponent(ActiveRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

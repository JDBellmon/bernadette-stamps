import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiHeadernavSmComponent } from './partial-ui-headernav-sm.component';

describe('PartialUiHeadernavSmComponent', () => {
  let component: PartialUiHeadernavSmComponent;
  let fixture: ComponentFixture<PartialUiHeadernavSmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiHeadernavSmComponent]
    });
    fixture = TestBed.createComponent(PartialUiHeadernavSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

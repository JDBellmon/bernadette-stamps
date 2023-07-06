import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiHeadernavMdComponent } from './partial-ui-headernav-md.component';

describe('PartialUiHeadernavMdComponent', () => {
  let component: PartialUiHeadernavMdComponent;
  let fixture: ComponentFixture<PartialUiHeadernavMdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiHeadernavMdComponent]
    });
    fixture = TestBed.createComponent(PartialUiHeadernavMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

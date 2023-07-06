import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiHeadernavLgComponent } from './partial-ui-headernav-lg.component';

describe('PartialUiHeadernavLgComponent', () => {
  let component: PartialUiHeadernavLgComponent;
  let fixture: ComponentFixture<PartialUiHeadernavLgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiHeadernavLgComponent]
    });
    fixture = TestBed.createComponent(PartialUiHeadernavLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

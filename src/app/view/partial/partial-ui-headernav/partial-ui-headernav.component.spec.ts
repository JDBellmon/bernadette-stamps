import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiHeadernavComponent } from './partial-ui-headernav.component';

describe('PartialUiHeadernavComponent', () => {
  let component: PartialUiHeadernavComponent;
  let fixture: ComponentFixture<PartialUiHeadernavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiHeadernavComponent]
    });
    fixture = TestBed.createComponent(PartialUiHeadernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

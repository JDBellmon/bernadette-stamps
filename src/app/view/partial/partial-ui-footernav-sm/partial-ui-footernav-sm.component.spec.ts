import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiFooternavSmComponent } from './partial-ui-footernav-sm.component';

describe('PartialUiFooternavSmComponent', () => {
  let component: PartialUiFooternavSmComponent;
  let fixture: ComponentFixture<PartialUiFooternavSmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiFooternavSmComponent]
    });
    fixture = TestBed.createComponent(PartialUiFooternavSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

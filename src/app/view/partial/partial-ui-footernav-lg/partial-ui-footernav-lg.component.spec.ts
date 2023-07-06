import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiFooternavLgComponent } from './partial-ui-footernav-lg.component';

describe('PartialUiFooternavLgComponent', () => {
  let component: PartialUiFooternavLgComponent;
  let fixture: ComponentFixture<PartialUiFooternavLgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiFooternavLgComponent]
    });
    fixture = TestBed.createComponent(PartialUiFooternavLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

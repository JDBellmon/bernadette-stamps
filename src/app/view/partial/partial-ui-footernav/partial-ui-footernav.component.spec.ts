import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiFooternavComponent } from './partial-ui-footernav.component';

describe('PartialUiFooternavComponent', () => {
  let component: PartialUiFooternavComponent;
  let fixture: ComponentFixture<PartialUiFooternavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiFooternavComponent]
    });
    fixture = TestBed.createComponent(PartialUiFooternavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

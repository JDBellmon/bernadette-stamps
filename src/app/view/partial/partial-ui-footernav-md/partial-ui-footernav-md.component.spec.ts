import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiFooternavMdComponent } from './partial-ui-footernav-md.component';

describe('PartialUiFooternavMdComponent', () => {
  let component: PartialUiFooternavMdComponent;
  let fixture: ComponentFixture<PartialUiFooternavMdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiFooternavMdComponent]
    });
    fixture = TestBed.createComponent(PartialUiFooternavMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

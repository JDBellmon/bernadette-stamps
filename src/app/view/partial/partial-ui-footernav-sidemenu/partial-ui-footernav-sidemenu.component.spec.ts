import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiFooternavSidemenuComponent } from './partial-ui-footernav-sidemenu.component';

describe('PartialUiFooternavSidemenuComponent', () => {
  let component: PartialUiFooternavSidemenuComponent;
  let fixture: ComponentFixture<PartialUiFooternavSidemenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiFooternavSidemenuComponent]
    });
    fixture = TestBed.createComponent(PartialUiFooternavSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

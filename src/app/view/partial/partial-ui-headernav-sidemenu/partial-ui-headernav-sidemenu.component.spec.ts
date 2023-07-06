import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiHeadernavSidemenuComponent } from './partial-ui-headernav-sidemenu.component';

describe('PartialUiHeadernavSidemenuComponent', () => {
  let component: PartialUiHeadernavSidemenuComponent;
  let fixture: ComponentFixture<PartialUiHeadernavSidemenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiHeadernavSidemenuComponent]
    });
    fixture = TestBed.createComponent(PartialUiHeadernavSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

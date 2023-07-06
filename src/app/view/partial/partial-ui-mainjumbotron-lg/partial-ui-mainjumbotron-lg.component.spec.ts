import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiMainjumbotronLgComponent } from './partial-ui-mainjumbotron-lg.component';

describe('PartialUiMainjumbotronLgComponent', () => {
  let component: PartialUiMainjumbotronLgComponent;
  let fixture: ComponentFixture<PartialUiMainjumbotronLgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiMainjumbotronLgComponent]
    });
    fixture = TestBed.createComponent(PartialUiMainjumbotronLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

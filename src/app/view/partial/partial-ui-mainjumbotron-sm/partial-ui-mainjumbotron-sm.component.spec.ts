import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiMainjumbotronSmComponent } from './partial-ui-mainjumbotron-sm.component';

describe('PartialUiMainjumbotronSmComponent', () => {
  let component: PartialUiMainjumbotronSmComponent;
  let fixture: ComponentFixture<PartialUiMainjumbotronSmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiMainjumbotronSmComponent]
    });
    fixture = TestBed.createComponent(PartialUiMainjumbotronSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

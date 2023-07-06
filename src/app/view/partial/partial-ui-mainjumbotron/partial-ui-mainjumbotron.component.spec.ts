import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiMainjumbotronComponent } from './partial-ui-mainjumbotron.component';

describe('PartialUiMainjumbotronComponent', () => {
  let component: PartialUiMainjumbotronComponent;
  let fixture: ComponentFixture<PartialUiMainjumbotronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiMainjumbotronComponent]
    });
    fixture = TestBed.createComponent(PartialUiMainjumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialUiMainjumbotronMdComponent } from './partial-ui-mainjumbotron-md.component';

describe('PartialUiMainjumbotronMdComponent', () => {
  let component: PartialUiMainjumbotronMdComponent;
  let fixture: ComponentFixture<PartialUiMainjumbotronMdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialUiMainjumbotronMdComponent]
    });
    fixture = TestBed.createComponent(PartialUiMainjumbotronMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

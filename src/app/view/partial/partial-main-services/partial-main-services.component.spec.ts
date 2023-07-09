import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainServicesComponent } from './partial-main-services.component';

describe('PartialMainServicesComponent', () => {
  let component: PartialMainServicesComponent;
  let fixture: ComponentFixture<PartialMainServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainServicesComponent]
    });
    fixture = TestBed.createComponent(PartialMainServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

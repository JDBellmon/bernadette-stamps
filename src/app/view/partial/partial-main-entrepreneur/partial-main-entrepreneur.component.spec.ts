import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainEntrepreneurComponent } from './partial-main-entrepreneur.component';

describe('PartialMainEntrepreneurComponent', () => {
  let component: PartialMainEntrepreneurComponent;
  let fixture: ComponentFixture<PartialMainEntrepreneurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainEntrepreneurComponent]
    });
    fixture = TestBed.createComponent(PartialMainEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

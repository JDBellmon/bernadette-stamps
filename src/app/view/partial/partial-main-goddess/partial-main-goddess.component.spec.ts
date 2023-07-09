import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainGoddessComponent } from './partial-main-goddess.component';

describe('PartialMainGoddessComponent', () => {
  let component: PartialMainGoddessComponent;
  let fixture: ComponentFixture<PartialMainGoddessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainGoddessComponent]
    });
    fixture = TestBed.createComponent(PartialMainGoddessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

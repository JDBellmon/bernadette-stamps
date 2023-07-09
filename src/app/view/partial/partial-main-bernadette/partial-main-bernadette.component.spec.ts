import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainBernadetteComponent } from './partial-main-bernadette.component';

describe('PartialMainBernadetteComponent', () => {
  let component: PartialMainBernadetteComponent;
  let fixture: ComponentFixture<PartialMainBernadetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainBernadetteComponent]
    });
    fixture = TestBed.createComponent(PartialMainBernadetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

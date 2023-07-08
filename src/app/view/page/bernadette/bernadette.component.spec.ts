import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BernadetteComponent } from './bernadette.component';

describe('BernadetteComponent', () => {
  let component: BernadetteComponent;
  let fixture: ComponentFixture<BernadetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BernadetteComponent]
    });
    fixture = TestBed.createComponent(BernadetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

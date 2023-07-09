import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainTarotComponent } from './partial-main-tarot.component';

describe('PartialMainTarotComponent', () => {
  let component: PartialMainTarotComponent;
  let fixture: ComponentFixture<PartialMainTarotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainTarotComponent]
    });
    fixture = TestBed.createComponent(PartialMainTarotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainBeautyComponent } from './partial-main-beauty.component';

describe('PartialMainBeautyComponent', () => {
  let component: PartialMainBeautyComponent;
  let fixture: ComponentFixture<PartialMainBeautyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainBeautyComponent]
    });
    fixture = TestBed.createComponent(PartialMainBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

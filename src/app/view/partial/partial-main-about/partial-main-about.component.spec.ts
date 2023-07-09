import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainAboutComponent } from './partial-main-about.component';

describe('PartialMainAboutComponent', () => {
  let component: PartialMainAboutComponent;
  let fixture: ComponentFixture<PartialMainAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainAboutComponent]
    });
    fixture = TestBed.createComponent(PartialMainAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

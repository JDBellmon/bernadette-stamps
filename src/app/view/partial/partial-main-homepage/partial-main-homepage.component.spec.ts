import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainHomepageComponent } from './partial-main-homepage.component';

describe('PartialMainHomepageComponent', () => {
  let component: PartialMainHomepageComponent;
  let fixture: ComponentFixture<PartialMainHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainHomepageComponent]
    });
    fixture = TestBed.createComponent(PartialMainHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainBlogComponent } from './partial-main-blog.component';

describe('PartialMainBlogComponent', () => {
  let component: PartialMainBlogComponent;
  let fixture: ComponentFixture<PartialMainBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainBlogComponent]
    });
    fixture = TestBed.createComponent(PartialMainBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

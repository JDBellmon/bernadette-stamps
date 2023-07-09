import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMainMusicComponent } from './partial-main-music.component';

describe('PartialMainMusicComponent', () => {
  let component: PartialMainMusicComponent;
  let fixture: ComponentFixture<PartialMainMusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartialMainMusicComponent]
    });
    fixture = TestBed.createComponent(PartialMainMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

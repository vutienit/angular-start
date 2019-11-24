import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNameInputComponent } from './hero-name-input.component';

describe('HeroNameInputComponent', () => {
  let component: HeroNameInputComponent;
  let fixture: ComponentFixture<HeroNameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroNameInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

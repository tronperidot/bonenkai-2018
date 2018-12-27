import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchSlideComponent } from './switch-slide.component';

describe('SwitchSlideComponent', () => {
  let component: SwitchSlideComponent;
  let fixture: ComponentFixture<SwitchSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

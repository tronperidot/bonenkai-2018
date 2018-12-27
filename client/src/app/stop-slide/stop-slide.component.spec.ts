import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopSlideComponent } from './stop-slide.component';

describe('StopSlideComponent', () => {
  let component: StopSlideComponent;
  let fixture: ComponentFixture<StopSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

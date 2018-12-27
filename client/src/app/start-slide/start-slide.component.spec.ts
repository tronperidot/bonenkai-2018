import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSlideComponent } from './start-slide.component';

describe('StartSlideComponent', () => {
  let component: StartSlideComponent;
  let fixture: ComponentFixture<StartSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

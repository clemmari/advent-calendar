import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1ComponentComponent } from './day1-component.component';

describe('Day1ComponentComponent', () => {
  let component: Day1ComponentComponent;
  let fixture: ComponentFixture<Day1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

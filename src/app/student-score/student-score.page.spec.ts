import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentScorePage } from './student-score.page';

describe('StudentScorePage', () => {
  let component: StudentScorePage;
  let fixture: ComponentFixture<StudentScorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentScorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

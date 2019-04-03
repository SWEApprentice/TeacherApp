import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSavePage } from './student-save.page';

describe('StudentSavePage', () => {
  let component: StudentSavePage;
  let fixture: ComponentFixture<StudentSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

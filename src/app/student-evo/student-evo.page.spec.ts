import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEvoPage } from './student-evo.page';

describe('StudentEvoPage', () => {
  let component: StudentEvoPage;
  let fixture: ComponentFixture<StudentEvoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEvoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEvoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

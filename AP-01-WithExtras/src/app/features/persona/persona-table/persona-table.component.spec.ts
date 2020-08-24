import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaTableComponent } from './persona-table.component';

describe('PersonaTableComponent', () => {
  let component: PersonaTableComponent;
  let fixture: ComponentFixture<PersonaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

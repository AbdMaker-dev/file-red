import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeCompetencesComponent } from './edite-competences.component';

describe('EditeCompetencesComponent', () => {
  let component: EditeCompetencesComponent;
  let fixture: ComponentFixture<EditeCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

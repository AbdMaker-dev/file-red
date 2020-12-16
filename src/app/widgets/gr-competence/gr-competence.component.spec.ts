import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrCompetenceComponent } from './gr-competence.component';

describe('GrCompetenceComponent', () => {
  let component: GrCompetenceComponent;
  let fixture: ComponentFixture<GrCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

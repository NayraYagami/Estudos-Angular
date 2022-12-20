import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeMedicoCrudComponent } from './especialidade-medico-crud.component';

describe('EspecialidadeMedicoCrudComponent', () => {
  let component: EspecialidadeMedicoCrudComponent;
  let fixture: ComponentFixture<EspecialidadeMedicoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeMedicoCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeMedicoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

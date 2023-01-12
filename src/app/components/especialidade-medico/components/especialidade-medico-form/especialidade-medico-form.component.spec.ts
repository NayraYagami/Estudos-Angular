import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeMedicoFormComponent } from './especialidade-medico-form.component';

describe('EspecialidadeMedicoFormComponent', () => {
  let component: EspecialidadeMedicoFormComponent;
  let fixture: ComponentFixture<EspecialidadeMedicoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeMedicoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeMedicoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

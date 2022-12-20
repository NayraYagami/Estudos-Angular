import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeMedicoCreateComponent } from './especialidade-medico-create.component';

describe('EspecialidadeMedicoCreateComponent', () => {
  let component: EspecialidadeMedicoCreateComponent;
  let fixture: ComponentFixture<EspecialidadeMedicoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeMedicoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeMedicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

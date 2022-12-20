import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeMedicoDeleteComponent } from './especialidade-medico-delete.component';

describe('EspecialidadeMedicoDeleteComponent', () => {
  let component: EspecialidadeMedicoDeleteComponent;
  let fixture: ComponentFixture<EspecialidadeMedicoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeMedicoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeMedicoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

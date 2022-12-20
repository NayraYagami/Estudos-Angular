import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeMedicoReadComponent } from './especialidade-medico-read.component';

describe('EspecialidadeMedicoReadComponent', () => {
  let component: EspecialidadeMedicoReadComponent;
  let fixture: ComponentFixture<EspecialidadeMedicoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeMedicoReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeMedicoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

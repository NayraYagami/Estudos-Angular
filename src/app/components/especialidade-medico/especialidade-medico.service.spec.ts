import { TestBed } from '@angular/core/testing';

import { EspecialidadeMedicoService } from './especialidade-medico.service';

describe('EspecialidadeMedicoService', () => {
  let service: EspecialidadeMedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecialidadeMedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

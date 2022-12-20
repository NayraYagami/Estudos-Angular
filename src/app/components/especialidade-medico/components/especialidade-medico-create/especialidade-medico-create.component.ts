import { EspecialidadeMedico } from '../../especialidade-medico.model';
import { EspecialidadeMedicoService } from '../../especialidade-medico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-medico-create',
  templateUrl: './especialidade-medico-create.component.html',
  styleUrls: ['./especialidade-medico-create.component.css'],
})
export class EspecialidadeMedicoCreateComponent implements OnInit {
  especialidadeMedico: EspecialidadeMedico = {
    medicoId: null,
    especialidadeId: null,
  };

  constructor(
    private especialidadeMedicoService: EspecialidadeMedicoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createEspecialidadeMedico(): void {
    this.especialidadeMedicoService
      .create(this.especialidadeMedico)
      .subscribe(() => {
        this.especialidadeMedicoService.showMenssage(
          'Operação executada com sucesso!'
        );
        this.router.navigate(['/especialidadeMedico']);
      });
  }

  cancel(): void {
    this.router.navigate(['/especialidadeMedico']);
  }
}

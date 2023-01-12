import { Router } from '@angular/router';
import { EspecialidadeMedicoService } from './../../especialidade-medico.service';
import { EspecialidadeMedico } from './../../especialidade-medico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-medico-form',
  templateUrl: './especialidade-medico-form.component.html',
  styleUrls: ['./especialidade-medico-form.component.css'],
})
export class EspecialidadeMedicoFormComponent implements OnInit {
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

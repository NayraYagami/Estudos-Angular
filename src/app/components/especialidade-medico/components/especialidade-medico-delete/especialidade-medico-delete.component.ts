import { Router, ActivatedRoute } from '@angular/router';
import { EspecialidadeMedicoService } from './../../especialidade-medico.service';
import { EspecialidadeMedico } from './../../especialidade-medico.model';
import { Especialidade } from './../../../especialidade/especialidade.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-medico-delete',
  templateUrl: './especialidade-medico-delete.component.html',
  styleUrls: ['./especialidade-medico-delete.component.css'],
})
export class EspecialidadeMedicoDeleteComponent implements OnInit {
  especialidadeMedico: EspecialidadeMedico;

  constructor(
    private especialidadeMedicoService: EspecialidadeMedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.especialidadeMedicoService
      .readById(id)
      .subscribe((especialidadeMedico) => {
        this.especialidadeMedico = especialidadeMedico;
      });
  }

  deleteEspecialidadeMedico(): void {
    this.especialidadeMedicoService
      .delete(this.especialidadeMedico.id)
      .subscribe(() => {
        this.especialidadeMedicoService.showMenssage(
          'Produto excluído com sucesso'
        );
        this.router.navigate(['/especialidadeMedico']);
      });
  }

  cancel(): void {
    this.router.navigate(['/especialidadeMedico']);
  }
}

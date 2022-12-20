import { Router } from '@angular/router';
import { MedicoService } from './../medico.service';
import { Medico } from './../medico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-create2',
  templateUrl: './medico-create2.component.html',
  styleUrls: ['./medico-create2.component.css'],
})
export class MedicoCreate2Component implements OnInit {
  medico: Medico = {
    dataCriacao: null,
    dataExclusao: null,
    crm: '',
    pessoa: null,
  };

  constructor(private MedicoService: MedicoService, private router: Router) {}

  ngOnInit(): void {}

  createEspecialidadeMedico(): void {
    this.MedicoService.create(this.medico).subscribe(() => {
      this.MedicoService.showMenssage('Operação executada com sucesso!');
      this.router.navigate(['/medico']);
    });
  }

  cancel(): void {
    this.router.navigate(['/Medico']);
  }
}

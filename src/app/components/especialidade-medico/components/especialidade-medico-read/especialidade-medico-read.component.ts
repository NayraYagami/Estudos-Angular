import {
  EspecialidadeMedico,
  EspecialidadeMedicoSearch,
} from '../../especialidade-medico.model';
import { EspecialidadeMedicoService } from '../../especialidade-medico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-medico-read',
  templateUrl: './especialidade-medico-read.component.html',
  styleUrls: ['./especialidade-medico-read.component.css'],
})
export class EspecialidadeMedicoReadComponent implements OnInit {
  displayedColumns = [
    'idEspecialidade',
    'IdMedico',
    'nomeESpecialidade',
    'nomeMedico',
    'idEspecialidadeMedico',
    'action',
  ];

  especialidadeMedicoSearch: EspecialidadeMedicoSearch = {
    idEspecialidade: null,
    idMedico: null,
    nomeEspecialidade: '',
    nomeMedico: '',
    idEspecialidadeMedico: null,
  };

  especialidadesMedicoSearch: EspecialidadeMedicoSearch[];

  constructor(private especialidadeMedicoService: EspecialidadeMedicoService) {}

  ngOnInit(): void {
    this.especialidadeMedicoService
      .read(this.especialidadeMedicoSearch)
      .subscribe((especialidadesMedicoSearch) => {
        this.especialidadesMedicoSearch = especialidadesMedicoSearch;
        console.log(especialidadesMedicoSearch);
      });
  }

  search(): void {
    this.especialidadeMedicoService
      .read(this.especialidadeMedicoSearch)
      .subscribe((especialidadesMedicoSearch) => {
        this.especialidadesMedicoSearch = especialidadesMedicoSearch;
        console.log(especialidadesMedicoSearch);
      });
  }
}

import { MedicoService } from './../medico.service';
import { MedicoSearch } from './../medico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-read',
  templateUrl: './medico-read.component.html',
  styleUrls: ['./medico-read.component.css'],
})
export class MedicoReadComponent implements OnInit {
  constructor(private medicoService: MedicoService) {}

  displayedColumns = [
    'id',
    'nomeMedico',
    'cpf',
    'sexo',
    'dataCriacaoInicio',
    'dataCriacaoFim',
    'actions',
  ];

  medicoSearch: MedicoSearch = {
    idMedico: null,
    nomeMedico: '',
    cpf: '',
    dataCriacaoInicio: null,
    dataCriacaoFim: null,
    idsEspecialidadeMedico: null,
  };

  medicosSearch: MedicoSearch[];

  ngOnInit(): void {
    this.medicoService.read(this.medicoSearch).subscribe((medicosSearch) => {
      this.medicosSearch = medicosSearch;
      console.log(medicosSearch);
    });
  }

  buscar(): void {
    this.medicoService.read(this.medicoSearch).subscribe((medicosSearch) => {
      this.medicosSearch = medicosSearch;
      console.log(medicosSearch);
    });
  }
}

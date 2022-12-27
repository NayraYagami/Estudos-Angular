import { Router } from '@angular/router';
import { AgendamentosSearch } from './../agendamentos.model';
import { AgendamentosService } from './../agendamentos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamentos-read',
  templateUrl: './agendamentos-read.component.html',
  styleUrls: ['./agendamentos-read.component.css'],
})
export class AgendamentosReadComponent implements OnInit {
  constructor(
    private agendamentosService: AgendamentosService,
    private router: Router
  ) {}

  displayedColumns = [
    'id',
    'idMedico',
    'nomeMedico',
    'idCliente',
    'nomeCliente',
    'valorConsulta',
    'dataAbertura',
    'dataConsulta',
    'actions',
  ];

  agendamentoSearch: AgendamentosSearch = {
    nomeMedico: '',
    nomeCliente: '',
    dataAberturaInicio: '',
    dataAberturaFim: '',
    dataAtendimentoInicio: '',
    dataAtendimentoFim: '',
    valorConsultaMaximo: null,
    valorConsultaMinimo: null,
    ativo: null,
  };

  agendamentosSearch: AgendamentosSearch[];

  ngOnInit(): void {
    this.agendamentosService
      .read(this.agendamentoSearch)
      .subscribe((agendamentosSearch) => {
        this.agendamentosSearch = agendamentosSearch;
        console.log(agendamentosSearch);
      });
  }
  click() {
    this.router.navigate(['/agendamentos/create']);
  }
}

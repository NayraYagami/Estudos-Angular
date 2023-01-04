import { FormGroup, FormBuilder } from '@angular/forms';
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
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ativoOption: any[];

  public formGroupAgendamentos: FormGroup;

  agendamentosSearch: AgendamentosSearch[];

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

  click() {}

  search() {
    this.agendamentosService
      .read(this.formGroupAgendamentos.value)
      .subscribe((agendamentosSearch) => {
        this.agendamentosSearch = agendamentosSearch;
        console.log(agendamentosSearch);
      });
  }

  navigateToAgendamentoCreate() {
    this.router.navigate(['/agendamentos/create']);
  }

  getAtivo() {
    return [
      { value: true, desc: 'Ativo' },
      { value: false, desc: 'Cancelado' },
    ];
  }

  createForm(agendamento: AgendamentosSearch) {
    this.formGroupAgendamentos = this.formBuilder.group({
      nomeMedico: [''],
      nomeCliente: [''],
      dataAberturaInicio: [''],
      dataAberturaFim: [''],
      dataAtendimentoInicio: [''],
      dataAtendimentoFim: [''],
      valorConsultaMaximo: null,
      valorConsultaMinimo: null,
      ativo: null,
    });
  }

  ngOnInit(): void {
    this.ativoOption = this.getAtivo();
    this.createForm(this.agendamentoSearch);
  }
}

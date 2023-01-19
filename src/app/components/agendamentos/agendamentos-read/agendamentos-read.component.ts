import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Agendamentos, AgendamentosSearch } from './../agendamentos.model';
import { AgendamentosService } from './../agendamentos.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agendamentos-read',
  templateUrl: './agendamentos-read.component.html',
  styleUrls: ['./agendamentos-read.component.css'],
})
export class AgendamentosReadComponent implements OnInit {
  constructor(
    private agendamentosService: AgendamentosService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ativoOption: any[];

  pageSize = [5, 10, 25, 100];
  length = 0;

  public formGroupAgendamentos: FormGroup;
  agendamentosSearch: AgendamentosSearch[];
  pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.formGroupAgendamentos.value.pageSize = e.pageSize;
    this.formGroupAgendamentos.value.page = e.pageIndex + 1;
    this.search();
  }

  setPageSize(inputPageSize: string) {
    if (inputPageSize) {
      this.pageSize = inputPageSize.split(',').map((str) => +str);
    }
  }

  displayedColumns = [
    'nomeCliente',
    'nomeMedico',
    'dataConsulta',
    'valorConsulta',
    'idMedico',
    'idCliente',
    'dataAbertura',
    'id',
    'actions',
  ];

  // agendamentoSearch: AgendamentosSearch = {
  //   nomeMedico: '',
  //   nomeCliente: '',
  //   dataAberturaInicio: '',
  //   dataAberturaFim: '',
  //   dataAtendimentoInicio: '',
  //   dataAtendimentoFim: '',
  //   valorConsultaMaximo: null,
  //   valorConsultaMinimo: null,
  //   ativo: null,
  //   page: null,
  //   pageSize: null,
  // };

  search() {
    this.agendamentosService
      .read(this.formGroupAgendamentos.value)
      .subscribe((search) => {
        this.agendamentosSearch = search.list;
        this.length = search.total;
        console.log(search.list);
      });
  }

  navigateToAgendamentosForm() {
    this.router.navigate(['/agendamentos/form']);
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
      page: 1,
      pageSize: 5,
    });
  }

  save(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Deseja de fato cancelar?',
        text: 'Essa operação não pode ser desfeita!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, cancele!',
        cancelButtonText: 'Não, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.agendamentosService.delete(id).subscribe(
            () => {
              swalWithBootstrapButtons.fire(
                'Cancelado!',
                'Agendamento cancelado com sucesso!',
                'success'
              );
            },
            (error) => {
              swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
            }
          );
          this.router.navigate(['/agendamentos']);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelada',
            'Operação cancelada com sucesso :)',
            'error'
          );
          this.router.navigate(['/agendamentos']);
        }
      });
  }

  ngOnInit(): void {
    this.ativoOption = this.getAtivo();
    this.createForm(new AgendamentosSearch());
    this.search();
  }
}

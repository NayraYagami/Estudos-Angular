import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Agendamentos, AgendamentosSearch } from './../agendamentos.model';
import { AgendamentosService } from './../agendamentos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agendamentos-read',
  templateUrl: './agendamentos-read.component.html',
  styleUrls: ['./agendamentos-read.component.css'],
})
export class AgendamentosReadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Agendamentos>;

  constructor(
    private agendamentosService: AgendamentosService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ativoOption: any[];

  public formGroupAgendamentos: FormGroup;
  agendamentosSearch: AgendamentosSearch[];

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

  search() {
    this.agendamentosService
      .read(this.formGroupAgendamentos.value)
      .subscribe((agendamentosSearch) => {
        this.agendamentosSearch = agendamentosSearch;
        console.log(agendamentosSearch);
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
    this.createForm(this.agendamentoSearch);
  }
}

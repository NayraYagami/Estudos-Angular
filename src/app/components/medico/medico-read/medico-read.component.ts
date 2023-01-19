import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MedicoService } from './../medico.service';
import { MedicoSearch } from './../medico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-read',
  templateUrl: './medico-read.component.html',
  styleUrls: ['./medico-read.component.css'],
})
export class MedicoReadComponent implements OnInit {
  constructor(
    private medicoService: MedicoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  pageSize = [5, 10, 25, 100];
  length = 0;
  sexoOption: any[];
  ativoOption: any[];
  medicosSearch: MedicoSearch[];
  public formGroupMedico: FormGroup;
  pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.formGroupMedico.value.pageSize = e.pageSize;
    this.formGroupMedico.value.page = e.pageIndex + 1;
    this.search();
  }

  setPageSize(inputPageSize: string) {
    if (inputPageSize) {
      this.pageSize = inputPageSize.split(',').map((str) => +str);
    }
  }

  getSexo() {
    return [
      { value: 'MASCULINO', desc: 'Masculino' },
      { value: 'FEMININO', desc: 'Feminino' },
      { value: 'T_REX', desc: 'T_Rex' },
    ];
  }

  getAtivo() {
    return [
      { value: true, desc: 'Ativo' },
      { value: false, desc: 'Cancelado' },
    ];
  }

  displayedColumns = [
    'id',
    'nomeMedico',
    'cpf',
    'sexo',
    'dataCriacaoInicio',
    'dataCriacaoFim',
    'actions',
  ];

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
        title: 'Deseja de fato Deletar?',
        text: 'Essa operação não pode ser desfeita!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, deletar!',
        cancelButtonText: 'Não, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.medicoService.delete(id).subscribe(
            () => {
              swalWithBootstrapButtons.fire(
                'Deletado!',
                'Médico deletado com sucesso!',
                'success'
              );
            },
            (error) => {
              swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
            }
          );
          this.router.navigate(['/medico']);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelada',
            'Operação cancelada com sucesso :)',
            'error'
          );
          this.router.navigate(['/medico']);
        }
      });
  }

  // medicoSearch: MedicoSearch = {
  //   idMedico: null,
  //   nomeMedico: '',
  //   cpf: '',
  //   dataCriacaoInicio: '',
  //   dataCriacaoFim: '',
  //   ativo: null,
  //   sexo: null,
  //   idsEspecialidadeMedico: null,
  // };

  search() {
    this.medicoService.read(this.getFilter()).subscribe((search) => {
      this.medicosSearch = search.list;
      this.length = search.total;
      console.log(search.list);
    });
  }

  createForm(medico: MedicoSearch) {
    this.formGroupMedico = this.formBuilder.group({
      idMedico: [''],
      nomeMedico: [''],
      cpf: [''],
      dataCriacaoInicio: [''],
      dataCriacaoFim: [''],
      ativo: [''],
      sexo: [null],
      idsEspecialidadeMedico: [null],
      page: 1,
      pageSize: 5,
    });
  }

  private getFilter(): MedicoSearch {
    let filter: MedicoSearch = new MedicoSearch();
    filter.idsEspecialidadeMedico = new Array<number>();
    let pageSize = this.formGroupMedico.get('pageSize').value;
    let page = this.formGroupMedico.get('page').value;
    let nomeMedico = this.formGroupMedico.get('nomeMedico').value;
    let cpf = this.formGroupMedico.get('cpf').value;
    let idMedico = this.formGroupMedico.get('idMedico').value;
    let dataCriacaoInicio = this.formGroupMedico.get('dataCriacaoInicio').value;
    let dataCriacaoFim = this.formGroupMedico.get('dataCriacaoFim').value;
    let ativo = this.formGroupMedico.get('ativo').value;
    let sexo = this.formGroupMedico.get('sexo').value;

    let idsEspecialidadeMedicoInput = this.formGroupMedico.get(
      'idsEspecialidadeMedico'
    ).value;

    if (!!idsEspecialidadeMedicoInput) {
      let idsEspecialidadeMedicoList: number[] = idsEspecialidadeMedicoInput
        .split(',')
        .map((el) => {
          let n = Number(el);
          return n === 0 ? n : n || el;
        });

      if (
        !!idsEspecialidadeMedicoList &&
        idsEspecialidadeMedicoList.length > 0
      ) {
        filter.idsEspecialidadeMedico = idsEspecialidadeMedicoList;
      }
    }

    filter.nomeMedico = nomeMedico;
    filter.cpf = cpf;
    filter.idMedico = idMedico;
    filter.dataCriacaoInicio = dataCriacaoInicio;
    filter.dataCriacaoFim = dataCriacaoFim;
    filter.ativo = ativo;
    filter.sexo = sexo;
    filter.pageSize = pageSize;
    filter.page = page;

    return filter;
  }

  navigateToMedicoForm(): void {
    this.router.navigate(['/medico/form']);
  }

  ngOnInit(): void {
    this.ativoOption = this.getAtivo();
    this.sexoOption = this.getSexo();
    this.createForm(new MedicoSearch());
    this.search();
  }
}

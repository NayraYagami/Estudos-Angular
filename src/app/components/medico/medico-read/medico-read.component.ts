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

  sexoOption: any[];
  ativoOption: any[];

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

  medicoSearch: MedicoSearch = {
    idMedico: null,
    nomeMedico: '',
    cpf: '',
    dataCriacaoInicio: '',
    dataCriacaoFim: '',
    ativo: null,
    sexo: null,
    idsEspecialidadeMedico: null,
  };

  medicosSearch: MedicoSearch[];

  public formGroupMedico: FormGroup;

  search() {
    console.log(this.formGroupMedico.value);
    this.medicoService.read(this.getFilter()).subscribe((medicosSearch) => {
      this.medicosSearch = medicosSearch;
      console.log(medicosSearch);
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
    });
  }

  private getFilter(): MedicoSearch {
    let filter: MedicoSearch = new MedicoSearch();
    filter.idsEspecialidadeMedico = new Array<number>();

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

    return filter;
  }

  navigateToMedicoForm(): void {
    this.router.navigate(['/medico/form']);
  }

  ngOnInit(): void {
    this.ativoOption = this.getAtivo();
    this.sexoOption = this.getSexo();
    this.createForm(this.medicoSearch);
  }
}

import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';
import { EspecialidadeMedicoService } from './../../especialidade-medico.service';
import { EspecialidadeMedicoSearch } from './../../especialidade-medico.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-especialidade-medico-read',
  templateUrl: './especialidade-medico-read.component.html',
  styleUrls: ['./especialidade-medico-read.component.css'],
})
export class EspecialidadeMedicoReadComponent implements OnInit {
  length = 0;
  pageSize = [5, 10, 25];
  especialidadesMedicoSearch: EspecialidadeMedicoSearch[];
  pageEvent: PageEvent;
  public formGroupEspecialidadeMedico: FormGroup;

  constructor(
    private especialidadeMedicoService: EspecialidadeMedicoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm(new EspecialidadeMedicoSearch());
    this.search();
  }

  displayedColumns = [
    'idEspecialidade',
    'IdMedico',
    'nomeEspecialidade',
    'nomeMedico',
    'idEspecialidadeMedico',
    'action',
  ];

  especialidadeMedicoSearch: EspecialidadeMedicoSearch = {
    idsEspecialidade: null,
    idsMedico: null,
    page: 1,
    pageSize: 5,
  };

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.especialidadeMedicoSearch.pageSize = e.pageSize;
    this.especialidadeMedicoSearch.page = e.pageIndex + 1;
    this.search();
  }

  // setPageSize(inputPageSize: string) {
  //   if (inputPageSize) {
  //     this.pageSize = inputPageSize.split(',').map((str) => +str);
  //   }
  // }

  search(): void {
    this.especialidadeMedicoService
      .read(this.getFilter())
      .subscribe((search) => {
        this.especialidadesMedicoSearch = search.list;
        this.length = search.total;
        console.log(search.list);
      });
  }

  private getFilter(): EspecialidadeMedicoSearch {
    let filter: EspecialidadeMedicoSearch = new EspecialidadeMedicoSearch();
    filter.idsMedico = new Array<number>();
    filter.idsEspecialidade = new Array<number>();
    let idEspecialidadeInput =
      this.formGroupEspecialidadeMedico.get('idsEspecialidade').value;
    // let page = this.formGroupEspecialidadeMedico.get('page').value;
    // let pageSize = this.formGroupEspecialidadeMedico.get('pageSize').value;
    let idMedicoInput =
      this.formGroupEspecialidadeMedico.get('idsMedico').value;
    if (!!idMedicoInput) {
      let idMedicoList: number[] = idMedicoInput.split(',').map((el) => {
        let n = Number(el);
        return n === 0 ? n : n || el;
      });

      if (!!idMedicoList && idMedicoList.length > 0) {
        this.especialidadeMedicoSearch.idsMedico = idMedicoList;
      }
    }

    if (!!idEspecialidadeInput) {
      let idEspecialidadeList: number[] = idEspecialidadeInput
        .split(',')
        .map((el) => {
          let n = Number(el);
          return n === 0 ? n : n || el;
        });

      if (!!idEspecialidadeList && idEspecialidadeList.length > 0) {
        this.especialidadeMedicoSearch.idsEspecialidade = idEspecialidadeList;
      }
    }
    console.log(filter);
    // filter.page = page;
    // filter.pageSize = pageSize;
    return this.especialidadeMedicoSearch;
  }

  createForm(especialidadeMedico: EspecialidadeMedicoSearch) {
    this.formGroupEspecialidadeMedico = this.formBuilder.group({
      idsEspecialidade: [null],
      idsMedico: [null],
      page: 1,
      pageSize: 5,
    });
  }

  navigateToEspecialidadeMedicoForm(): void {
    this.router.navigate(['/especialidadeMedico/form']);
  }

  save(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
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
          this.especialidadeMedicoService.delete(id).subscribe(
            () => {
              swalWithBootstrapButtons.fire(
                'Deletado!',
                'Especialidade Médico deletada com sucesso!',
                'success'
              );
            },
            (error) => {}
          );
          this.router.navigate(['/especialidadeMedico']);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelada',
            'Operação cancelada com sucesso :)',
            'error'
          );
          this.router.navigate(['/especialidadeMedico']);
        }
      });
  }
}

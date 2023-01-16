import Swal from 'sweetalert2';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { EspecialidadeMedicoService } from './../../especialidade-medico.service';
import {
  EspecialidadeMedicoSearch,
  EspecialidadeMedico,
} from './../../especialidade-medico.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-especialidade-medico-read',
  templateUrl: './especialidade-medico-read.component.html',
  styleUrls: ['./especialidade-medico-read.component.css'],
})
export class EspecialidadeMedicoReadComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EspecialidadeMedico>;

  especialidadesMedico: EspecialidadeMedico[] = [];
  dataSource = new MatTableDataSource<EspecialidadeMedico>(
    this.especialidadesMedico
  );

  pageEvent: PageEvent;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  constructor(
    private especialidadeMedicoService: EspecialidadeMedicoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm(this.especialidadeMedicoSearch);
  }

  ngAfterViewInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.especialidadeMedicoService
      .findAll(this.especialidadeMedicoSearch)
      .subscribe((resposta) => {
        this.especialidadesMedico = resposta;
        this.dataSource = new MatTableDataSource<EspecialidadeMedico>(
          this.especialidadesMedico
        );
        this.dataSource.paginator = this.paginator;
      });
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
    idsEspecialidade: [],
    idsMedico: [],
  };

  especialidadesMedicoSearch: EspecialidadeMedicoSearch[];

  search(): void {
    console.log(this.formGroupEspecialidadeMedico.value);
    this.especialidadeMedicoService
      .read(this.getFilter())
      .subscribe((especialidadesMedicoSearch) => {
        this.especialidadesMedicoSearch = especialidadesMedicoSearch;
      });
  }

  private getFilter(): EspecialidadeMedicoSearch {
    let filter: EspecialidadeMedicoSearch = new EspecialidadeMedicoSearch();
    filter.idsMedico = new Array<number>();
    filter.idsEspecialidade = new Array<number>();
    let idEspecialidadeInput =
      this.formGroupEspecialidadeMedico.get('idsEspecialidade').value;
    let idMedicoInput =
      this.formGroupEspecialidadeMedico.get('idsMedico').value;
    if (!!idMedicoInput) {
      let idMedicoList: number[] = idMedicoInput.split(',').map((el) => {
        let n = Number(el);
        return n === 0 ? n : n || el;
      });

      if (!!idMedicoList && idMedicoList.length > 0) {
        filter.idsMedico = idMedicoList;
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
        filter.idsEspecialidade = idEspecialidadeList;
      }
    }
    console.log(filter);
    return filter;
  }

  public formGroupEspecialidadeMedico: FormGroup;

  createForm(especialidadeMedico: EspecialidadeMedicoSearch) {
    this.formGroupEspecialidadeMedico = this.formBuilder.group({
      idsEspecialidade: [null],
      idsMedico: [null],
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

  // handlePageEvent(e: PageEvent) {
  //   this.pageEvent = e;
  //   this.length = e.length;
  //   this.pageSize = e.pageSize;
  //   this.pageIndex = e.pageIndex;
  // }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   if (setPageSizeOptionsInput) {
  //     this.pageSizeOptions = setPageSizeOptionsInput
  //       .split(',')
  //       .map((str) => +str);
  //   }
  // }
}

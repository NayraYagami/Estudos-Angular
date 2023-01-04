import { EspecialidadeMedicoService } from './../../especialidade-medico.service';
import { EspecialidadeMedicoSearch } from './../../especialidade-medico.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-medico-read',
  templateUrl: './especialidade-medico-read.component.html',
  styleUrls: ['./especialidade-medico-read.component.css'],
})
export class EspecialidadeMedicoReadComponent implements OnInit {
  constructor(
    private especialidadeMedicoService: EspecialidadeMedicoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm(this.especialidadeMedicoSearch);
  }

  displayedColumns = [
    'idEspecialidade',
    'IdMedico',
    'nomeESpecialidade',
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
    debugger;
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

  navigateToEspecialidadeMedicoCreate(): void {
    this.router.navigate(['/especialidadeMedico/create']);
  }
}

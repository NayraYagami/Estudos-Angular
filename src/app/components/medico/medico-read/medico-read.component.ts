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
    private formBuilder: FormBuilder
  ) {}

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
    dataCriacaoInicio: '',
    dataCriacaoFim: '',
    ativo: null,
  };

  medicosSearch: MedicoSearch[];

  public formGroupMedico: FormGroup;

  search() {
    this.medicoService
      .read(this.formGroupMedico.value)
      .subscribe((medicosSearch) => {
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
    });
  }

  ngOnInit(): void {
    this.createForm(this.medicoSearch);
  }
}

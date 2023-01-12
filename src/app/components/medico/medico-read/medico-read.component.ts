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

  medicoSearch: MedicoSearch = {
    idMedico: null,
    nomeMedico: '',
    cpf: '',
    dataCriacaoInicio: '',
    dataCriacaoFim: '',
    ativo: null,
    sexo: null,
  };

  medicosSearch: MedicoSearch[];

  public formGroupMedico: FormGroup;

  search() {
    console.log(this.formGroupMedico.value);
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
      sexo: [null],
    });
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

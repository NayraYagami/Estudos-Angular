import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteSearch } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css'],
})
export class ClienteReadComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) {}

  displayedColumns = [
    'id',
    'nomeCliente',
    'cpf',
    'sexo',
    'dataNascimento',
    'dataCriacao',
    'dataExclusao',
    'actions',
  ];

  clienteSearch: ClienteSearch = {
    idCliente: null,
    nomeCliente: '',
    numeroTelefone: '',
    dataCriacaoInicio: '',
    dataCriacaoFim: '',
    ativo: null,
    cpf: '',
    emailCliente: '',
  };

  clientesSearch: ClienteSearch[];

  search() {
    this.clienteService
      .read(this.formGroupCliente.value)
      .subscribe((clientesSearch) => {
        this.clientesSearch = clientesSearch;
        console.log(clientesSearch);
      });
  }

  public formGroupCliente: FormGroup;

  cliente: ClienteSearch;

  createForm(cliente: ClienteSearch) {
    this.formGroupCliente = this.formBuilder.group({
      idCliente: [''],
      nomeCliente: [''],
      numeroTelefone: [''],
      dataCriacaoInicio: [''],
      dataCriacaoFim: [''],
      ativo: [''],
      cpf: [''],
      emailCliente: [''],
    });
  }

  ngOnInit(): void {
    this.createForm(this.clienteSearch);
  }
}

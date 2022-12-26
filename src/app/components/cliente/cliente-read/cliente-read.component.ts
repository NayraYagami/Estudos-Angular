import { ClienteSearch } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css'],
})
export class ClienteReadComponent implements OnInit {
  constructor(private clienteService: ClienteService) {}

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

  ngOnInit(): void {
    this.clienteService.read(this.clienteSearch).subscribe((clientesSearch) => {
      this.clientesSearch = clientesSearch;
      console.log(clientesSearch);
    });
  }
}

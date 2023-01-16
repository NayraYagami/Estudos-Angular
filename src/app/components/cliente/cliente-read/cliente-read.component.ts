import Swal from 'sweetalert2';
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
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ativoOption: any[];

  sexoOption: any[];

  getSexo() {
    return [
      { value: 'MASCULINO', desc: 'Masculino' },
      { value: 'FEMININO', desc: 'Feminino' },
      { value: 'T_REX', desc: 'T_Rex' },
    ];
  }

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
    sexo: null,
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
      sexo: [null],
    });
  }

  sweetAlert(id: number) {
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
          // debugger;
          this.clienteService.delete(id).subscribe(
            () => {
              swalWithBootstrapButtons.fire(
                'Cancelado!',
                'Cliente deletado com sucesso!',
                'success'
              );
            },
            (error) => {
              swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
            }
          );
          this.router.navigate(['/cliente']);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Operação cancelada',
            'Cliente ativo :)',
            'error'
          );
          this.router.navigate(['/cliente']);
        }
      });
  }

  getAtivo() {
    return [
      { value: true, desc: 'Ativo' },
      { value: false, desc: 'Cancelado' },
    ];
  }

  navigateToClienteForm() {
    this.router.navigate(['/cliente/form']);
  }

  ngOnInit(): void {
    this.sexoOption = this.getSexo();
    this.ativoOption = this.getAtivo();
    this.createForm(this.clienteSearch);
  }
}

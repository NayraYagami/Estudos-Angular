import Swal from 'sweetalert2';
import { Cliente } from './../cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
})
export class ClienteFormComponent {
  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  childmessage = false;

  sexoOption: any[];

  public formGroupCliente: FormGroup;
  cliente: Cliente;

  createForm(cliente: Cliente) {
    this.formGroupCliente = this.formBuilder.group({
      pessoa: this.formBuilder.group({
        id: [''],
        dataNascimento: ['', [Validators.required]],
        sexo: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        peso: ['', [Validators.required]],
        altura: ['', [Validators.required]],
        nome: ['', [Validators.required]],
      }),
      id: [''],
      emailInput: [''],
      telefones: this.formBuilder.array([]),
      emails: this.formBuilder.array([]),
      dataCriacao: ['', [Validators.required]],
      dataExclusao: [''],
    });
  }

  get telefones() {
    return this.formGroupCliente.get('telefones') as FormArray;
  }

  get emails() {
    return this.formGroupCliente.get('emails') as FormArray;
  }

  getSexo() {
    return [
      { value: 'MASCULINO', desc: 'Masculino' },
      { value: 'FEMININO', desc: 'Feminino' },
      { value: 'T_REX', desc: 'T_Rex' },
    ];
  }

  save() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Enviar dados do cliente',
        text: 'Para cancelar clique em voltar!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Voltar',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (this.formGroupCliente.value.id) {
            this.clienteService.update(this.formGroupCliente.value).subscribe(
              () => {
                swalWithBootstrapButtons.fire(
                  'Atualizado!',
                  'Cliente atualizado com sucesso!',
                  'success'
                );
              },
              (error) => {
                swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
              }
            );
            this.router.navigate(['/cliente']);
          } else {
            this.clienteService.create(this.formGroupCliente.value).subscribe(
              () => {
                swalWithBootstrapButtons.fire(
                  'Cadastrado!',
                  'Cliente cadastrado!',
                  'success'
                );
              },
              (error) => {
                swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
              }
            );
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Operação cancelada', '', 'error');
          this.router.navigate(['/cliente']);
        }
      });
  }

  ngOnInit(): void {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });
    this.sexoOption = this.getSexo();
    this.createForm(new Cliente());
    if (!!this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.clienteService.readById(id).subscribe(
        (cliente) => {
          this.cliente = cliente;
          this.formGroupCliente.patchValue(cliente);
          this.cliente.telefones.map((telefone) =>
            this.adicionarTelefone(telefone.numeroTelefone)
          );
          this.cliente.emails.map((email) =>
            this.adicionarEmail(email.enderecoEmail)
          );
        },
        (error) => {
          swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
          this.router.navigate(['/cliente']);
        }
      );
    }
  }

  adicionarTelefone(numeroTelefone: string) {
    this.telefones.push(
      this.formBuilder.group({
        numeroTelefone: numeroTelefone,
      })
    );
  }
  adicionarEmail(enderecoEmail: string) {
    this.emails.push(
      this.formBuilder.group({
        enderecoEmail: enderecoEmail,
      })
    );
  }

  cancel(): void {
    this.router.navigate(['/cliente']);
  }
}

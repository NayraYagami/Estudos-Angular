import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css'],
})
export class ClienteDeleteComponent {
  cliente: Cliente;

  childmessage = false;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  public formGroupCliente: FormGroup;

  createForm(cliente: Cliente) {
    this.formGroupCliente = this.formBuilder.group({
      pessoa: this.formBuilder.group({
        id: [''],
        dataNascimento: ['2000-06-12T11:52:28.397', [Validators.required]],
        sexo: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        peso: ['', [Validators.required]],
        altura: ['', [Validators.required]],
        nome: ['', [Validators.required]],
      }),
      id: [''],
      telefones: this.formBuilder.array([]),
      emails: this.formBuilder.array([]),
      dataCriacao: ['2000-06-12T11:52:28.397', [Validators.required]],
      dataExclusao: [''],
    });
  }

  get telefones() {
    return this.formGroupCliente.get('telefones') as FormArray;
  }
  get emails() {
    return this.formGroupCliente.get('emails') as FormArray;
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

  ngOnInit(): void {
    this.createForm(new Cliente());
    const id = this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(id).subscribe((cliente) => {
      this.cliente = cliente;
      this.formGroupCliente.patchValue(cliente);
      this.cliente.telefones.map((telefone) =>
        this.adicionarTelefone(telefone.numeroTelefone)
      );
      this.cliente.emails.map((email) =>
        this.adicionarEmail(email.enderecoEmail)
      );
    });
  }

  deleteCliente(): void {
    this.clienteService.delete(this.cliente.id).subscribe(() => {
      this.clienteService.showMenssage('Cliente deletado com sucesso!');
      this.router.navigate(['/cliente']);
    });
  }

  cancel(): void {
    this.router.navigate(['/cliente']);
  }
}

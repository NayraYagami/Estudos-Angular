import { Cliente } from './../cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css'],
})
export class ClienteUpdateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  formGroupCliente!: FormGroup;
  cliente: Cliente;

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

  updateCliente(): void {
    this.clienteService.update(this.formGroupCliente.value).subscribe(() => {
      this.clienteService.showMenssage('Produto atualizado com sucesso!');
      this.router.navigate(['/cliente']);
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
  cancel(): void {
    this.router.navigate(['/cliente']);
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
}

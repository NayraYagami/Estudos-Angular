import { Cliente } from './../cliente.model';
import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'],
})
export class ClienteCreateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  sexoOption: any[];

  public formGroupCliente: FormGroup;

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

  get telefones() {
    return this.formGroupCliente.get('telefones') as FormArray;
  }

  get emails() {
    return this.formGroupCliente.get('emails') as FormArray;
  }

  ngOnInit(): void {
    this.sexoOption = this.getSexo();
    this.createForm(new Cliente());
  }

  createCliente(): void {
    console.log(this.formGroupCliente.value);
    this.clienteService.create(this.formGroupCliente.value).subscribe(() => {
      this.clienteService.showMenssage('Operação executada com sucesso!');
      this.router.navigate(['/cliente']);
    });
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

  getSexo() {
    return [
      { value: 'MASCULINO', desc: 'Masculino' },
      { value: 'FEMININO', desc: 'Feminino' },
      { value: 'T_REX', desc: 'T_Rex' },
    ];
  }

  cancel(): void {
    this.router.navigate(['/cliente']);
  }
}

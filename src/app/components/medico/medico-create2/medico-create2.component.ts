import { Cliente } from './../../cliente/cliente.model';
import { Router } from '@angular/router';
import { MedicoService } from './../medico.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medico-create2',
  templateUrl: './medico-create2.component.html',
  styleUrls: ['./medico-create2.component.css'],
})
export class MedicoCreate2Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private medicoService: MedicoService,
    private router: Router
  ) {}

  public formGroupMedico: FormGroup;

  createForm(cliente: Cliente) {
    this.formGroupMedico = this.formBuilder.group({
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
      dataCriacao: ['2000-06-12T11:52:28.397', [Validators.required]],
      dataExclusao: [''],
      crm: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.createForm(new Cliente());
  }

  createMedico(): void {
    console.log(this.formGroupMedico.value);
    this.medicoService.create(this.formGroupMedico.value).subscribe(() => {
      this.medicoService.showMenssage('Operação executada com sucesso!');
      this.router.navigate(['/medico']);
    });
  }

  cancel(): void {
    this.router.navigate(['/medico']);
  }
}

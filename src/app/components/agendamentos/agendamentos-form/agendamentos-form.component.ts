import Swal from 'sweetalert2';
import { Agendamentos } from './../agendamentos.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AgendamentosService } from './../agendamentos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamentos-form',
  templateUrl: './agendamentos-form.component.html',
  styleUrls: ['./agendamentos-form.component.css'],
})
export class AgendamentosFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private agendamentosService: AgendamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  childmessage = false;

  cancel(): void {
    this.router.navigate(['/agendamentos']);
  }

  public formGroupAgendamentos: FormGroup;

  agendamentos: Agendamentos;

  createForm(agendamentos: Agendamentos) {
    this.formGroupAgendamentos = this.formBuilder.group({
      id: [''],
      dataAbertura: ['2000-06-12T11:52:28.397', [Validators.required]],
      dataConsulta: ['2023-06-12T11:52:28.397', [Validators.required]],
      dataCancelamento: [''],
      valorConsulta: ['', [Validators.required]],
      cliente: this.formBuilder.group({
        id: ['', [Validators.required]],
      }),
      medico: this.formBuilder.group({
        id: ['', [Validators.required]],
      }),
    });
  }

  sweetAlert() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Enviar dados do agendamento',
        text: 'Para cancelar clique em voltar!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Voltar',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.validateForm(this.formGroupAgendamentos);
          if (this.formGroupAgendamentos.value.id) {
            this.agendamentosService
              .update(this.formGroupAgendamentos.value)
              .subscribe(
                () => {
                  swalWithBootstrapButtons.fire(
                    'Atualizado!',
                    'Agendamento atualizado com sucesso!',
                    'success'
                  );
                },
                (error) => {
                  swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
                }
              );
            this.router.navigate(['/agendamentos']);
          } else {
            this.agendamentosService
              .create(this.formGroupAgendamentos.value)
              .subscribe(
                () => {
                  swalWithBootstrapButtons.fire(
                    'Agendado!',
                    'Agendamento confirmado!',
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
          this.router.navigate(['/agendamentos']);
        }
      });
  }

  ngOnInit(): void {
    this.createForm(new Agendamentos());
    if (!!this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.agendamentosService.readById(id).subscribe((agendamentos) => {
        this.agendamentos = agendamentos;
        this.formGroupAgendamentos.patchValue(agendamentos);
      });
    }
  }

  get dataAbertura() {
    return this.formGroupAgendamentos.get('dataAbertura');
  }

  validateForm(formGroupAgendamentos: FormGroup): any {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    if (!this.formGroupAgendamentos.get('dataAbertura')) {
      return swalWithBootstrapButtons.fire(
        'Data de abertura nula ou  vazia!',
        '',
        'error'
      );
    }
    if (!this.formGroupAgendamentos.get('valorConsulta')) {
      return swalWithBootstrapButtons.fire(
        'Valor da consulta não informado!',
        '',
        'error'
      );
    }
  }
}

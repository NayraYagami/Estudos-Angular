import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { EspecialidadeMedicoService } from './../../especialidade-medico.service';
import { EspecialidadeMedico } from './../../especialidade-medico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-medico-form',
  templateUrl: './especialidade-medico-form.component.html',
  styleUrls: ['./especialidade-medico-form.component.css'],
})
export class EspecialidadeMedicoFormComponent implements OnInit {
  especialidadeMedico: EspecialidadeMedico = {
    medicoId: null,
    especialidadeId: null,
  };

  constructor(
    private especialidadeMedicoService: EspecialidadeMedicoService,
    private router: Router
  ) {}

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
        title: 'Enviar dados da especialidade médico',
        text: 'Para cancelar clique em voltar!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Voltar',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.especialidadeMedicoService
            .create(this.especialidadeMedico)
            .subscribe(
              () => {
                swalWithBootstrapButtons.fire(
                  'Cadastrado!',
                  'Especialidade Médico cadastrada!',
                  'success'
                );
              },
              (error) => {
                swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
              }
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Operação cancelada', '', 'error');
          this.router.navigate(['/especialidadeMedico']);
        }
      });
  }

  ngOnInit(): void {}

  createEspecialidadeMedico(): void {
    this.especialidadeMedicoService
      .create(this.especialidadeMedico)
      .subscribe(() => {
        this.especialidadeMedicoService.showMenssage(
          'Operação executada com sucesso!'
        );
        this.router.navigate(['/especialidadeMedico']);
      });
  }

  cancel(): void {
    this.router.navigate(['/especialidadeMedico']);
  }
}

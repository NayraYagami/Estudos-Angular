import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { EspecialidadeService } from './../especialidade.service';
import { Especialidade } from './../../../especialidade.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-form',
  templateUrl: './especialidade-form.component.html',
  styleUrls: ['./especialidade-form.component.css'],
})
export class EspecialidadeFormComponent implements OnInit {
  constructor(
    private especialidadeService: EspecialidadeService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  formGroupEspecialidade: FormGroup;
  especialidade: Especialidade;
  childmessage = false;

  createForm(especialidade: Especialidade) {
    this.formGroupEspecialidade = this.formBuilder.group({
      id: [''],
      descricao: ['', [Validators.required]],
    });
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
        title: 'Enviar dados da especialidade',
        text: 'Para cancelar clique em voltar!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Voltar',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (this.formGroupEspecialidade.value.id) {
            this.especialidadeService
              .update(this.formGroupEspecialidade.value)
              .subscribe(
                () => {
                  swalWithBootstrapButtons.fire(
                    'Atualizada!',
                    'Especialidade atualizada com sucesso!',
                    'success'
                  );
                },
                (error) => {
                  swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
                }
              );
            this.router.navigate(['/especialidade']);
          } else {
            this.especialidadeService
              .create(this.formGroupEspecialidade.value)
              .subscribe(
                () => {
                  swalWithBootstrapButtons.fire(
                    'Especialidade cadastrada!',
                    '',
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
          this.router.navigate(['/especialidade']);
        }
      });
  }

  ngOnInit(): void {
    this.createForm(new Especialidade());
    if (!!this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.especialidadeService.readById(id).subscribe((especialidade) => {
        this.especialidade = especialidade;
        this.formGroupEspecialidade.patchValue(especialidade);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/especialidade']);
  }
}

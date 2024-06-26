import Swal from 'sweetalert2';
import { Medico } from './../../agendamentos/agendamentos.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicoService } from './../medico.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.css'],
})
export class MedicoFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private medicoService: MedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  sexoOption: any[];
  medico: Medico;
  childmessage = false;

  public formGroupMedico: FormGroup;

  createForm(medico: Medico) {
    this.formGroupMedico = this.formBuilder.group({
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
      dataCriacao: ['', [Validators.required]],
      dataExclusao: [''],
      crm: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });
    this.sexoOption = this.getSexo();
    this.createForm(new Medico());
    if (!!this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.medicoService.readById(id).subscribe(
        (medico) => {
          this.medico = medico;
          this.formGroupMedico.patchValue(medico);
        },
        (error) => {
          swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
          this.router.navigate(['/medico']);
        }
      );
    }
  }

  createMedico(): void {
    console.log(this.formGroupMedico.value);
    this.medicoService.create(this.formGroupMedico.value).subscribe(() => {
      this.medicoService.showMenssage('Operação executada com sucesso!');
      this.router.navigate(['/medico']);
    });
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
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (this.formGroupMedico.value.id) {
            this.medicoService.update(this.formGroupMedico.value).subscribe(
              () => {
                swalWithBootstrapButtons.fire(
                  'Atualizado!',
                  'Médico atualizado com sucesso!',
                  'success'
                );
              },
              (error) => {
                swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
              }
            );
            this.router.navigate(['/medico']);
          } else {
            this.medicoService.create(this.formGroupMedico.value).subscribe(
              () => {
                swalWithBootstrapButtons.fire(
                  'Cadastrado!',
                  'Médico cadastrado!',
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
          this.router.navigate(['/medico']);
        }
      });
  }

  click() {
    if (this.formGroupMedico.value.id) {
      this.medicoService.update(this.formGroupMedico.value).subscribe(() => {
        this.medicoService.showMenssage('Operação executada com sucesso!');
        this.router.navigate(['/medico']);
      });
    } else {
      this.medicoService.create(this.formGroupMedico.value).subscribe(() => {
        this.medicoService.showMenssage('Operação executada com sucesso!');
        this.router.navigate(['/medico']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/medico']);
  }
}

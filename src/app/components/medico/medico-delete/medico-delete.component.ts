import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicoService } from './../medico.service';
import { Medico } from './../medico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-delete',
  templateUrl: './medico-delete.component.html',
  styleUrls: ['./medico-delete.component.css'],
})
export class MedicoDeleteComponent implements OnInit {
  medico: Medico;

  constructor(
    private medicoService: MedicoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.medicoService.readById(id).subscribe((medico) => {
      this.medico = medico;
    });
  }

  deleteMedico(): void {
    this.medicoService.delete(this.medico.id).subscribe(() => {
      this.medicoService.showMenssage('Médico deletado com sucesso!');
      this.router.navigate(['/medico']);
    });
  }

  public formGroupMedico: FormGroup;

  createForm(medico: Medico) {
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

  cancel(): void {
    this.router.navigate(['/medico']);
  }
}

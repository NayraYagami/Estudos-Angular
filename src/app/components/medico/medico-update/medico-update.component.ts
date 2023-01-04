import { MedicoService } from './../medico.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Medico } from './../medico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-update',
  templateUrl: './medico-update.component.html',
  styleUrls: ['./medico-update.component.css'],
})
export class MedicoUpdateComponent implements OnInit {
  childmessage = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private medicoService: MedicoService
  ) {}

  formGroupMedico!: FormGroup;
  medico: Medico;

  sexoOption: any[];

  getSexo() {
    return [
      { value: 'MASCULINO', desc: 'Masculino' },
      { value: 'FEMININO', desc: 'Feminino' },
      { value: 'T_REX', desc: 'T_Rex' },
    ];
  }

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

  updateMedico(): void {
    this.medicoService.update(this.formGroupMedico.value).subscribe(() => {
      this.medicoService.showMenssage('Produto atualizado com sucesso!');
      this.router.navigate(['/medico']);
    });
  }
  cancel() {}

  ngOnInit(): void {
    this.sexoOption = this.getSexo();
    this.createForm(new Medico());
    const id = this.route.snapshot.paramMap.get('id');
    this.medicoService.readById(id).subscribe((medico) => {
      this.medico = medico;
      this.formGroupMedico.patchValue(medico);
    });
  }
}

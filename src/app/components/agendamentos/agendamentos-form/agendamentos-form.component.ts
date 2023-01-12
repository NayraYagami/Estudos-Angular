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

  click() {
    if (this.formGroupAgendamentos.value.id) {
      this.agendamentosService
        .update(this.formGroupAgendamentos.value)
        .subscribe(() => {
          this.agendamentosService.showMenssage(
            'Agendamento atualizado com sucesso!'
          );
          this.router.navigate(['/agendamentos']);
        });
    } else {
      this.agendamentosService
        .create(this.formGroupAgendamentos.value)
        .subscribe(() => {
          this.agendamentosService.showMenssage(
            'Operação executada com sucesso!'
          );
          this.router.navigate(['/agendamentos']);
        });
    }
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
}

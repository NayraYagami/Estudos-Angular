import { Agendamentos } from './../agendamentos.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AgendamentosService } from './../agendamentos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agendamentos-delete',
  templateUrl: './agendamentos-delete.component.html',
  styleUrls: ['./agendamentos-delete.component.css'],
})
export class AgendamentosDeleteComponent {
  constructor(
    private agendamentosService: AgendamentosService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  formGroupAgendamentos!: FormGroup;
  agendamentos: Agendamentos;
  childmessage = false;

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

  deleteAgendamento() {
    this.agendamentosService.delete(this.agendamentos.id).subscribe(() => {
      this.agendamentosService.showMenssage(
        'Agendamento cancelado com sucesso!'
      );
      this.router.navigate(['/agendamentos']);
    });
  }

  cancel() {
    this.router.navigate(['/agendamentos']);
  }
  ngOnInit(): void {
    this.createForm(new Agendamentos());
    const id = this.route.snapshot.paramMap.get('id');
    this.agendamentosService.readById(id).subscribe((agendamentos) => {
      this.agendamentos = agendamentos;
      this.formGroupAgendamentos.patchValue(agendamentos);
    });
  }
}

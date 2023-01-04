import { AgendamentosService } from './../agendamentos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Agendamentos } from './../agendamentos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamentos-create',
  templateUrl: './agendamentos-create.component.html',
  styleUrls: ['./agendamentos-create.component.css'],
})
export class AgendamentosCreateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private agendamentosService: AgendamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  childmessage = false;

  cancel(): void {
    this.router.navigate(['/agendamento']);
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

  createAgendamento() {
    this.agendamentosService
      .create(this.formGroupAgendamentos.value)
      .subscribe(() => {
        this.agendamentosService.showMenssage(
          'Operação executada com sucesso!'
        );
        this.router.navigate(['/agendamento']);
      });
  }

  // click() {
  //   if (this.formGroupAgendamentos.value.id) {
  //     this.agendamentosService
  //       .update(this.formGroupAgendamentos.value)
  //       .subscribe(() => {
  //         this.agendamentosService.showMenssage(
  //           'Agendamento atualizado com sucesso!'
  //         );
  //         this.router.navigate(['/agendamento']);
  //       });
  //   } else {
  //     this.agendamentosService
  //       .create(this.formGroupAgendamentos.value)
  //       .subscribe(() => {
  //         this.agendamentosService.showMenssage(
  //           'Operação executada com sucesso!'
  //         );
  //         this.router.navigate(['/agendamento']);
  //       });
  //   }
  // }

  ngOnInit(): void {
    this.createForm(new Agendamentos());
  }

  // icon() {
  //   this.createForm(new Agendamentos());
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.agendamentosService.readById(id).subscribe((agendamentos) => {
  //     this.agendamentos = agendamentos;
  //     this.formGroupAgendamentos.patchValue(agendamentos);
  //   });
  // }
}

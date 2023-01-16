import { AgendamentosFormComponent } from './agendamentos-form/agendamentos-form.component';
import { AgendamentoCrudComponent } from './../../views/agendamento-crud/agendamento-crud.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const agendamentoRoutes: Routes = [
  {
    path: 'agendamentos',
    component: AgendamentoCrudComponent,
  },
  {
    path: 'agendamentos/form',
    component: AgendamentosFormComponent,
  },
  {
    path: 'agendamentos/form/:id',
    component: AgendamentosFormComponent,
  },
  {
    path: 'agendamentos/form/delete/:id',
    component: AgendamentoCrudComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(agendamentoRoutes)],
  exports: [RouterModule],
})
export class AgendamentoRoutingModule {}

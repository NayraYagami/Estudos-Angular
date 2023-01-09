import { AgendamentosDeleteComponent } from './agendamentos-delete/agendamentos-delete.component';
import { AgendamentosUpdateComponent } from './agendamentos-update/agendamentos-update.component';
import { AgendamentosCreateComponent } from './agendamentos-create/agendamentos-create.component';
import { AgendamentoCrudComponent } from './../../views/agendamento-crud/agendamento-crud.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const agendamentoRoutes = [
  {
    path: 'agendamento',
    component: AgendamentoCrudComponent,
  },
  {
    path: 'agendamentos/create',
    component: AgendamentosCreateComponent,
  },
  {
    path: 'agendamentos/update/:id',
    component: AgendamentosUpdateComponent,
  },
  {
    path: 'agendamentos/delete/:id',
    component: AgendamentosDeleteComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(agendamentoRoutes)],
  exports: [RouterModule],
})
export class AgendamentoRoutingModule {}

import { AgendamentosDeleteComponent } from './components/agendamentos/agendamentos-delete/agendamentos-delete.component';
import { AgendamentosUpdateComponent } from './components/agendamentos/agendamentos-update/agendamentos-update.component';
import { AgendamentosCreateComponent } from './components/agendamentos/agendamentos-create/agendamentos-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { MedicoDeleteComponent } from './components/medico/medico-delete/medico-delete.component';
import { MedicoUpdateComponent } from './components/medico/medico-update/medico-update.component';
import { MedicoCreate2Component } from './components/medico/medico-create2/medico-create2.component';
import { EspecialidadeMedicoDeleteComponent } from './components/especialidade-medico/components/especialidade-medico-delete/especialidade-medico-delete.component';
import { EspecialidadeDeleteComponent } from './components/especialidade/components/especialidade/especialidade-delete/especialidade-delete.component';
import { EspecialidadeUpdateComponent } from './components/especialidade/components/especialidade/especialidade-update/especialidade-update.component';
import { EspecialidadeMedicoCrudComponent } from './views/especialidade-medico-crud/especialidade-medico-crud.component';
import { EspecialidadeCrudComponent } from './views/especialidade-crud/especialidade-crud.component';
import { MedicoCrudComponent } from './views/medico-crud/medico-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { AgendamentoCrudComponent } from './views/agendamento-crud/agendamento-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EspecialidadeCreateComponent } from './components/especialidade/components/especialidade/especialidade-create/especialidade-create.component';
import { EspecialidadeMedicoCreateComponent } from './components/especialidade-medico/components/especialidade-medico-create/especialidade-medico-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
  {
    path: 'cliente',
    component: ClienteCrudComponent,
  },
  {
    path: 'cliente/create',
    component: ClienteCreateComponent,
  },
  {
    path: 'cliente/update/:id',
    component: ClienteUpdateComponent,
  },
  {
    path: 'cliente/delete/:id',
    component: ClienteDeleteComponent,
  },
  {
    path: 'medico',
    component: MedicoCrudComponent,
  },
  {
    path: 'medico/create',
    component: MedicoCreate2Component,
  },
  {
    path: 'medico/update/:id',
    component: MedicoUpdateComponent,
  },
  {
    path: 'medico/delete/:id',
    component: MedicoDeleteComponent,
  },
  {
    path: 'especialidade',
    component: EspecialidadeCrudComponent,
  },
  {
    path: 'especialidade/create',
    component: EspecialidadeCreateComponent,
  },
  {
    path: 'especialidade/update/:id',
    component: EspecialidadeUpdateComponent,
  },
  {
    path: 'especialidade/delete/:id',
    component: EspecialidadeDeleteComponent,
  },
  {
    path: 'especialidadeMedico',
    component: EspecialidadeMedicoCrudComponent,
  },
  {
    path: 'especialidadeMedico/create',
    component: EspecialidadeMedicoCreateComponent,
  },
  {
    path: 'especialidadeMedico/delete/:id',
    component: EspecialidadeMedicoDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

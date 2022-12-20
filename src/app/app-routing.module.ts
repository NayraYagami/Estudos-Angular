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
    path: 'cliente',
    component: ClienteCrudComponent,
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

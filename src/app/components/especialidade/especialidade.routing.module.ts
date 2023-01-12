import { EspecialidadeFormComponent } from './components/especialidade/especialidade-form/especialidade-form.component';
import { EspecialidadeDeleteComponent } from './components/especialidade/especialidade-delete/especialidade-delete.component';
import { EspecialidadeCrudComponent } from './../../views/especialidade-crud/especialidade-crud.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const especialidadeRoutes = [
  {
    path: 'especialidade',
    component: EspecialidadeCrudComponent,
  },
  {
    path: 'especialidade/form/:id',
    component: EspecialidadeFormComponent,
  },
  {
    path: 'especialidade/form',
    component: EspecialidadeFormComponent,
  },
  {
    path: 'especialidade/delete/:id',
    component: EspecialidadeDeleteComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(especialidadeRoutes)],
  exports: [RouterModule],
})
export class EspecialidadeRoutingModule {}

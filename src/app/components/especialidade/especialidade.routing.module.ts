import { EspecialidadeDeleteComponent } from './components/especialidade/especialidade-delete/especialidade-delete.component';
import { EspecialidadeUpdateComponent } from './components/especialidade/especialidade-update/especialidade-update.component';
import { EspecialidadeCreateComponent } from './components/especialidade/especialidade-create/especialidade-create.component';
import { EspecialidadeCrudComponent } from './../../views/especialidade-crud/especialidade-crud.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const especialidadeRoutes = [
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
];
@NgModule({
  imports: [RouterModule.forChild(especialidadeRoutes)],
  exports: [RouterModule],
})
export class EspecialidadeRoutingModule {}

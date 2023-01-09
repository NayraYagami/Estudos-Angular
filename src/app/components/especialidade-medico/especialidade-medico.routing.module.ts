import { EspecialidadeMedicoDeleteComponent } from './components/especialidade-medico-delete/especialidade-medico-delete.component';
import { EspecialidadeMedicoCreateComponent } from './components/especialidade-medico-create/especialidade-medico-create.component';
import { EspecialidadeMedicoCrudComponent } from './../../views/especialidade-medico-crud/especialidade-medico-crud.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const especialidadeMedicoRoutes = [
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
  imports: [RouterModule.forChild(especialidadeMedicoRoutes)],
  exports: [RouterModule],
})
export class EspecialidadeMedicoRoutingModule {}

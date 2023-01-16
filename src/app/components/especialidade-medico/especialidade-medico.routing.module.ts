import { EspecialidadeMedicoFormComponent } from './components/especialidade-medico-form/especialidade-medico-form.component';
import { EspecialidadeMedicoCrudComponent } from './../../views/especialidade-medico-crud/especialidade-medico-crud.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const especialidadeMedicoRoutes = [
  {
    path: 'especialidadeMedico',
    component: EspecialidadeMedicoCrudComponent,
  },
  {
    path: 'especialidadeMedico/form',
    component: EspecialidadeMedicoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(especialidadeMedicoRoutes)],
  exports: [RouterModule],
})
export class EspecialidadeMedicoRoutingModule {}

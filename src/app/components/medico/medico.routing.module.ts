import { MedicoFormComponent } from './medico-form/medico-form.component';
import { MedicoCrudComponent } from './../../views/medico-crud/medico-crud.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const medicoRoutes = [
  {
    path: 'medico',
    component: MedicoCrudComponent,
  },
  {
    path: 'medico/form',
    component: MedicoFormComponent,
  },
  {
    path: 'medico/form/:id',
    component: MedicoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(medicoRoutes)],
  exports: [RouterModule],
})
export class MedicoRoutingModule {}

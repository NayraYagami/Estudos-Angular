import { MedicoDeleteComponent } from './medico-delete/medico-delete.component';
import { MedicoUpdateComponent } from './medico-update/medico-update.component';
import { MedicoCreate2Component } from './medico-create2/medico-create2.component';
import { MedicoCrudComponent } from './../../views/medico-crud/medico-crud.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const medicoRoutes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(medicoRoutes)],
  exports: [RouterModule],
})
export class MedicoRoutingModule {}

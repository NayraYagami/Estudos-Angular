import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteCrudComponent } from './../../views/cliente-crud/cliente-crud.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const clienteRoutes = [
  {
    path: 'cliente',
    component: ClienteCrudComponent,
  },
  {
    path: 'cliente/form',
    component: ClienteFormComponent,
  },
  {
    path: 'cliente/form/:id',
    component: ClienteFormComponent,
  },
  {
    path: 'cliente/delete/:id',
    component: ClienteDeleteComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}

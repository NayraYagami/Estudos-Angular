import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteCrudComponent } from './../../views/cliente-crud/cliente-crud.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const clienteRoutes = [
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
];
@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}

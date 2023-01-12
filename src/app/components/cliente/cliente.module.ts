import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './cliente-read/cliente-read.component';
import { ClienteCrudComponent } from './../../views/cliente-crud/cliente-crud.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
@NgModule({
  imports: [
    ClienteRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [
    ClienteCrudComponent,
    ClienteReadComponent,
    ClienteDeleteComponent,
    ClienteFormComponent,
  ],
  providers: [],
})
export class ClienteModule {}

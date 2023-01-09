import { EspecialidadeMedicoDeleteComponent } from './components/especialidade-medico-delete/especialidade-medico-delete.component';
import { EspecialidadeMedicoReadComponent } from './components/especialidade-medico-read/especialidade-medico-read.component';
import { EspecialidadeMedicoCreateComponent } from './components/especialidade-medico-create/especialidade-medico-create.component';
import { EspecialidadeMedicoCrudComponent } from './../../views/especialidade-medico-crud/especialidade-medico-crud.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EspecialidadeMedicoRoutingModule } from './especialidade-medico.routing.module';

@NgModule({
  imports: [
    EspecialidadeMedicoRoutingModule,
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
    EspecialidadeMedicoCrudComponent,
    EspecialidadeMedicoCreateComponent,
    EspecialidadeMedicoReadComponent,
    EspecialidadeMedicoDeleteComponent,
  ],
  providers: [],
})
export class EspecialidadeMedicoModule {}

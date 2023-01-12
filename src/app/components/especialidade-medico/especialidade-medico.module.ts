import { EspecialidadeMedicoDeleteComponent } from './components/especialidade-medico-delete/especialidade-medico-delete.component';
import { EspecialidadeMedicoReadComponent } from './components/especialidade-medico-read/especialidade-medico-read.component';
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
import { EspecialidadeMedicoFormComponent } from './components/especialidade-medico-form/especialidade-medico-form.component';

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
    EspecialidadeMedicoReadComponent,
    EspecialidadeMedicoDeleteComponent,
    EspecialidadeMedicoFormComponent,
  ],
  providers: [],
})
export class EspecialidadeMedicoModule {}

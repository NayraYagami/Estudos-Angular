import { EspecialidadeRoutingModule } from './especialidade.routing.module';
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
import { EspecialidadeDeleteComponent } from './components/especialidade/especialidade-delete/especialidade-delete.component';
import { EspecialidadeReadComponent } from './components/especialidade/especialidade-read/especialidade-read.component';
import { EspecialidadeCrudComponent } from './../../views/especialidade-crud/especialidade-crud.component';
import { NgModule } from '@angular/core';
import { EspecialidadeFormComponent } from './components/especialidade/especialidade-form/especialidade-form.component';
@NgModule({
  imports: [
    EspecialidadeRoutingModule,
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
    EspecialidadeCrudComponent,
    EspecialidadeReadComponent,
    EspecialidadeDeleteComponent,
    EspecialidadeFormComponent,
  ],
  providers: [],
})
export class EspecialidadeModule {}

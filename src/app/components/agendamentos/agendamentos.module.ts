import { AgendamentoRoutingModule } from './agendamentos.routing.module';
import { AgendamentoCrudComponent } from './../../views/agendamento-crud/agendamento-crud.component';
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
import { AgendamentosUpdateComponent } from './agendamentos-update/agendamentos-update.component';
import { AgendamentosReadComponent } from './agendamentos-read/agendamentos-read.component';
import { AgendamentosCreateComponent } from './agendamentos-create/agendamentos-create.component';
import { AgendamentosDeleteComponent } from './agendamentos-delete/agendamentos-delete.component';
@NgModule({
  imports: [
    AgendamentoRoutingModule,
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
    AgendamentoCrudComponent,
    AgendamentosCreateComponent,
    AgendamentosReadComponent,
    AgendamentosUpdateComponent,
    AgendamentosDeleteComponent,
  ],
  providers: [],
})
export class AgendamentoModule {}

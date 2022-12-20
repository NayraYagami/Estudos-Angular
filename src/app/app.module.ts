import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule, LOCALE_ID, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { EspecialidadeCrudComponent } from './views/especialidade-crud/especialidade-crud.component';
import { AgendamentoCrudComponent } from './views/agendamento-crud/agendamento-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { MedicoCrudComponent } from './views/medico-crud/medico-crud.component';
import { EspecialidadeMedicoCrudComponent } from './views/especialidade-medico-crud/especialidade-medico-crud.component';
import { EspecialidadeCreateComponent } from './components/especialidade/components/especialidade/especialidade-create/especialidade-create.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EspecialidadeReadComponent } from './components/especialidade/components/especialidade/especialidade-read/especialidade-read.component';
import { EspecialidadeRead2Component } from './components/especialidade/components/especialidade/especialidade-read2/especialidade-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { EspecialidadeUpdateComponent } from './components/especialidade/components/especialidade/especialidade-update/especialidade-update.component';
import { EspecialidadeDeleteComponent } from './components/especialidade/components/especialidade/especialidade-delete/especialidade-delete.component';
import { EspecialidadeMedicoCreateComponent } from './components/especialidade-medico/components/especialidade-medico-create/especialidade-medico-create.component';
import { EspecialidadeMedicoReadComponent } from './components/especialidade-medico/components/especialidade-medico-read/especialidade-medico-read.component';
import { EspecialidadeMedicoDeleteComponent } from './components/especialidade-medico/components/especialidade-medico-delete/especialidade-medico-delete.component';
import { MedicoCreate2Component } from './components/medico/medico-create2/medico-create2.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EspecialidadeCrudComponent,
    AgendamentoCrudComponent,
    ClienteCrudComponent,
    MedicoCrudComponent,
    EspecialidadeMedicoCrudComponent,
    EspecialidadeCreateComponent,
    EspecialidadeReadComponent,
    EspecialidadeRead2Component,
    EspecialidadeUpdateComponent,
    EspecialidadeDeleteComponent,
    EspecialidadeMedicoCreateComponent,
    EspecialidadeMedicoReadComponent,
    EspecialidadeMedicoDeleteComponent,
    MedicoCreate2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

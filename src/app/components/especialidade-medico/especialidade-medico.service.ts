import { ListResponse } from './../agendamentos/agendamentos.model';
import { catchError, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import {
  EspecialidadeMedico,
  EspecialidadeMedicoSearch,
} from './especialidade-medico.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadeMedicoService {
  baseUrl = 'http://localhost:8080/agendamentos/api/especialidade-medico';

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(
    especialidadeMedico: EspecialidadeMedico
  ): Observable<EspecialidadeMedico> {
    return this.http.post<EspecialidadeMedico>(
      this.baseUrl,
      especialidadeMedico
    );
  }

  read(
    especialidadeMedicoSearch: EspecialidadeMedicoSearch
  ): Observable<ListResponse<EspecialidadeMedicoSearch>> {
    const urlSearch = `${this.baseUrl}/search/`;
    return this.http.post<ListResponse<EspecialidadeMedicoSearch>>(
      urlSearch,
      especialidadeMedicoSearch
    );
  }

  delete(id: number): Observable<EspecialidadeMedico> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<EspecialidadeMedico>(url);
  }

  readById(id: string): Observable<EspecialidadeMedico> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<EspecialidadeMedico>(url);
  }
}

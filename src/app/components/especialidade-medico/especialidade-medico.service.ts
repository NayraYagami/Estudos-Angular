import { catchError, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import {
  EspecialidadeMedico,
  EspecialidadeMedicoSearch,
} from './especialidade-medico.model';
import { HttpClient } from '@angular/common/http';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadeMedicoService {
  baseUrl = 'http://localhost:8080/agendamentos/api/especialidade-medico';
  baseUrlSearch =
    'http://localhost:8080/agendamentos/api/especialidade-medico/search';

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

  handleError(e: any): Observable<any> {
    this.showMenssage('Erro :)', true);
    return EMPTY;
  }

  read(
    especialidadeMedicoSearch: EspecialidadeMedicoSearch
  ): Observable<EspecialidadeMedicoSearch[]> {
    return this.http.post<EspecialidadeMedicoSearch[]>(
      this.baseUrlSearch,
      especialidadeMedicoSearch
    );
  }

  findAll(
    especialidadeMedicoSearch: EspecialidadeMedicoSearch
  ): Observable<EspecialidadeMedico[]> {
    return this.http.post<EspecialidadeMedico[]>(
      this.baseUrlSearch,
      especialidadeMedicoSearch
    );
  }

  delete(id: number): Observable<EspecialidadeMedico> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<EspecialidadeMedico>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  readById(id: string): Observable<EspecialidadeMedico> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<EspecialidadeMedico>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }
}

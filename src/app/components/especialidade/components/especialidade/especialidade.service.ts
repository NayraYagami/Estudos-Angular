import { catchError, map } from 'rxjs/operators';
import { Especialidade } from './../../especialidade.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadeService {
  baseUrl = 'http://localhost:8080/agendamentos/api/especialidade';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(especialidade: Especialidade): Observable<Especialidade> {
    return this.http.post<Especialidade>(this.baseUrl, especialidade).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  findAll(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.baseUrl);
  }

  handleError(e: any): Observable<any> {
    this.showMenssage('Erro :)', true);
    return EMPTY;
  }

  read(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  readById(id: string): Observable<Especialidade> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Especialidade>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  update(especialidade: Especialidade): Observable<Especialidade> {
    // const url = `${this.baseUrl}/${especialidade.id}`;
    const url = `${this.baseUrl}/`;
    return this.http.put<Especialidade>(url, especialidade).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  delete(id: number): Observable<Especialidade> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Especialidade>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }
}

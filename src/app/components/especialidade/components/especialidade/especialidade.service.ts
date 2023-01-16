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
    return this.http.post<Especialidade>(this.baseUrl, especialidade);
  }

  findAll(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.baseUrl);
  }

  read(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.baseUrl);
  }

  readById(id: string): Observable<Especialidade> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Especialidade>(url);
  }

  update(especialidade: Especialidade): Observable<Especialidade> {
    // const url = `${this.baseUrl}/${especialidade.id}`;
    const url = `${this.baseUrl}/`;
    return this.http.put<Especialidade>(url, especialidade);
  }

  delete(id: number): Observable<Especialidade> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Especialidade>(url);
  }
}

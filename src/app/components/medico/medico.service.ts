import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Medico, MedicoSearch } from './medico.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  baseUrl = 'http://localhost:8080/agendamentos/api/medico';
  baseUrlSearch = 'http://localhost:8080/agendamentos/api/medico/search';

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  handleError(e: any): Observable<any> {
    this.showMenssage('Erro :)', true);
    return EMPTY;
  }

  create(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.baseUrl, medico);
  }

  read(medicoSearch: MedicoSearch): Observable<MedicoSearch[]> {
    return this.http.post<MedicoSearch[]>(this.baseUrlSearch, medicoSearch);
  }

  delete(id: number): Observable<Medico> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Medico>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  update(medico: Medico): Observable<Medico> {
    // const url = `${this.baseUrl}/${especialidade.id}`;
    const url = `${this.baseUrl}/`;
    return this.http.put<Medico>(url, medico).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  readById(id: string): Observable<Medico> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Medico>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }
}

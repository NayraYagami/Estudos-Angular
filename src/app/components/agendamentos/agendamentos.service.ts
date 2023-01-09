import { Agendamentos, AgendamentosSearch } from './agendamentos.model';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AgendamentosService {
  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}

  baseUrl = 'http://localhost:8080/agendamentos/api/agendamentos';
  baseUrlSearch = 'http://localhost:8080/agendamentos/api/agendamentos/search';

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

  update(agendamentos: Agendamentos): Observable<Agendamentos> {
    const url = `${this.baseUrl}/`;
    return this.http.put<Agendamentos>(url, agendamentos).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  create(agendamento: Agendamentos): Observable<Agendamentos> {
    return this.http.post<Agendamentos>(this.baseUrl, agendamento);
  }

  findAll(): Observable<Agendamentos[]> {
    return this.http.get<Agendamentos[]>(this.baseUrl);
  }

  read(
    agendamentosSearch: AgendamentosSearch
  ): Observable<AgendamentosSearch[]> {
    return this.http.post<AgendamentosSearch[]>(
      this.baseUrlSearch,
      agendamentosSearch
    );
  }

  delete(id: number): Observable<Agendamentos> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Agendamentos>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  readById(id: string): Observable<Agendamentos> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Agendamentos>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }
}

import {
  ListResponse,
  Agendamentos,
  AgendamentosSearch,
} from './agendamentos.model';
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
  showMenssage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  update(agendamentos: Agendamentos): Observable<Agendamentos> {
    const url = `${this.baseUrl}/`;
    return this.http.put<Agendamentos>(url, agendamentos);
  }

  create(agendamento: Agendamentos): Observable<Agendamentos> {
    return this.http.post<Agendamentos>(this.baseUrl, agendamento);
  }

  read(
    agendamentosSearch: AgendamentosSearch
  ): Observable<ListResponse<AgendamentosSearch>> {
    const urlSearch = `${this.baseUrl}/search/`;
    return this.http.post<ListResponse<AgendamentosSearch>>(
      urlSearch,
      agendamentosSearch
    );
  }

  delete(id: number): Observable<Agendamentos> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Agendamentos>(url);
  }

  readById(id: string): Observable<Agendamentos> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Agendamentos>(url);
  }
}

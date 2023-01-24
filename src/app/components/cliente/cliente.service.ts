import { ListResponse } from './../agendamentos/agendamentos.model';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { ClienteSearch, Cliente } from './cliente.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  baseUrl = 'http://localhost:8080/agendamentos/api/cliente';
  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}

  read(clienteSearch: ClienteSearch): Observable<ListResponse<ClienteSearch>> {
    const urlSearch = `${this.baseUrl}/search/`;
    return this.http.post<ListResponse<ClienteSearch>>(
      urlSearch,
      clienteSearch
    );
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  delete(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cliente>(url);
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/`;
    return this.http.put<Cliente>(url, cliente);
  }

  readById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }
}

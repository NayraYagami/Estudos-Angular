import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from './medico.model';
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

  create(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.baseUrl, medico);
  }
}

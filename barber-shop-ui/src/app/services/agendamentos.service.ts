import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {
  private apiUrl = 'http://localhost:8080/agendamentos';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getAgendamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => this.handleError(error, 'Erro ao buscar agendamentos'))
    );
  }

  criarAgendamento(agendamento: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, agendamento, this.httpOptions).pipe(
      catchError(error => this.handleError(error, 'Erro ao criar agendamento'))
    );
  }

  excluirAgendamento(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' }).pipe(
      catchError(error => this.handleError(error, 'Erro ao excluir agendamento'))
    );
  }

  private handleError(error: any, message: string) {
    console.error(message, error);
    return throwError(() => new Error(`${message}. Tente novamente mais tarde.`));
  }
}

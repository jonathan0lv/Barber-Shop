import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:8080/clientes';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => this.handleError(error, 'Erro ao listar clientes'))
    );
  }

  criarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente, this.httpOptions).pipe(
      catchError(error => this.handleError(error, 'Erro ao criar cliente'))
    );
  }

  atualizarCliente(id: number, cliente: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, cliente, this.httpOptions).pipe(
      catchError(error => this.handleError(error, 'Erro ao atualizar cliente'))
    );
  }

  excluirCliente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' }).pipe(
      catchError(error => this.handleError(error, 'Erro ao excluir cliente'))
    );
  }

  private handleError(error: any, message: string) {
    console.error(message, error);
    return throwError(() => new Error(`${message}. Tente novamente mais tarde.`));
  }
}

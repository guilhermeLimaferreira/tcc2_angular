import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseUrl: string = 'http://devionic.com.br/'; // Substitua pela URL base da sua API

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'read.php');
  }

  getPessoaById(id: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}getPessoaById.php`, JSON.stringify({ ID: id }));
  }

  createPessoa(pessoa: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'create.php', JSON.stringify(pessoa));
  }

  updatePessoa(id: string, pessoa: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl + 'update.php'}`, JSON.stringify(pessoa));
  }

  deletePessoa(id: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl + 'delete.php'}`, JSON.stringify({ ID: id }));
  }

}

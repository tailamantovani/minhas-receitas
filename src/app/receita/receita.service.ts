import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receita } from '../model/receita';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  URL = 'http://localhost:3000/receitas';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getReceitas(): Observable<Receita[]> {
    return this.httpClient.get<Receita[]>(`${this.URL}`);
  }

  getById(id: number): Observable<Receita> {
    return this.httpClient.get<Receita>(`${this.URL}/${id}`);
  }

  save(receita: Receita): Promise<Receita | void> {
    return this.httpClient
      .post<Receita>(this.URL, JSON.stringify(receita), this.httpOptions)
      .toPromise();
  }

  patch(receita: Receita): Observable<Receita> {
    return this.httpClient.patch<Receita>(
      `${this.URL}/${receita.id}`,
      receita,
      this.httpOptions
    );
  }

  update(receita: Receita): Observable<Receita> {
    return this.httpClient.put<Receita>(
      `${this.URL}/${receita.id}`,
      receita,
      this.httpOptions
    );
  }

  delete(id: number): Observable<Receita> {
    return this.httpClient.delete(`${this.URL}/${id}`, this.httpOptions);
  }
}

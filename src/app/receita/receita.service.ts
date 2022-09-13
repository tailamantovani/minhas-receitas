import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receita } from 'src/app/model/receita';

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

  update(receita: Receita): Promise<Receita | void> {
    return this.httpClient
      .put<Receita>(`${this.URL}/${receita.id}`, JSON.stringify(receita), this.httpOptions)
      .toPromise();
  }

  delete(id: number): Observable<Receita> {
    return this.httpClient.delete(`${this.URL}/${id}`, this.httpOptions);
  }
}

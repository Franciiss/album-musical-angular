import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artista } from './artista';
import { URLSearchParams } from 'url';
import { ArtistaFiltro } from './artista-filtro';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:8080/api/artistas';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  // injeção de dependência
  constructor(private http: HttpClient) { }


  obterTodosOsArtistas(): Observable<Artista[]> {
    return this.http
               .get<Artista[]>(URL);
  }

  excluir(id): Observable<Artista>{
    return this.http.delete<Artista>('${URL}/${artistaId}');
  }

  salva(artista: Artista): Observable<Artista> {
    return this.http
               .post<Artista>(URL, artista, { headers: this.httpHeaders });

  }

  getArtista(artistaId): Observable<Artista> {
    return this.http
               .get<Artista>(`${URL}/${artistaId}`);
  }

  atualizar(artista: Artista): Observable<Artista> {
    return this.http
               .put<Artista>(`${URL}/${artista.artistaId}`,
                             artista,
                             { headers: this.httpHeaders } );
  }

  pesquisar(filtro: ArtistaFiltro) {
    const params = new URLSearchParams();
    const headers = new Headers();

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }
  }
}
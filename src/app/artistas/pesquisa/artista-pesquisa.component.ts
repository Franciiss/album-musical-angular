import { Component, OnInit } from '@angular/core';
import { ArtistaService } from '../artista.service';
import { Artista } from '../artista';
import { ArtistaFiltro } from '../artista-filtro';

@Component({
  selector: 'app-artista-pesquisa',
  templateUrl: './artista-pesquisa.component.html',
  styleUrls: ['./artista-pesquisa.component.css']
})
export class ArtistaPesquisaComponent implements OnInit {

  constructor(private artistaPesquisaService: ArtistaService) { }

  artistas: Artista[] = [];

  private artistaFiltro: ArtistaFiltro;

  ngOnInit() {
    this.artistaPesquisaService.obterTodosOsArtistas()
    .subscribe(artistas => {
      this.artistas = artistas;
    });
  }
}

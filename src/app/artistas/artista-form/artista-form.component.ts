import { Component, OnInit } from '@angular/core';
import { Artista } from '../artista';
import { ArtistaService } from '../artista.service';

import {Router, ActivatedRoute} from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-artista-form',
  templateUrl: './artista-form.component.html',
  styleUrls: ['./artista-form.component.css']
})
export class ArtistaFormComponent implements OnInit {

  private artista: Artista = new Artista();

  constructor(private artistaService: ArtistaService,
              private router: Router,
              private activationRote: ActivatedRoute) { }

  ngOnInit() {
    this.carregarArtista();
  }

  public salvar(): void {
    console.log('salvar artista ...')
    console.log(this.artista );

    this.artistaService.salva(this.artista)
                      .subscribe(
                        artista => {
                          this.router.navigate(['artistas/pesquisa'] );
                          swal('Novo Artista', 
                               `Artista ${artista.nome} foi cadastrado com sucesso.`,
                              'success' );
                        });
   }

   carregarArtista(): void {
     this.activationRote.params.subscribe(params => {
       let artistaId = params['artistaId'];
       
       if (artistaId) {
         this.artistaService.getArtista(artistaId)
             .subscribe(artista => this.artista = artista );
       }    
     });
   }

   atualizar():void {
    this.artistaService.atualizar(this.artista)
    .subscribe(artista => {
      this.router.navigate(['/artistas/pesquisa'])
      swal('Artista Atualizado', `Artista ${artista.nome} atualizado com sucesso!`, 'success')
    });
  }
}

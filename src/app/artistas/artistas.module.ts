import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ArtistaPesquisaComponent } from './pesquisa/artista-pesquisa.component';
import { ArtistaFormComponent } from './artista-form/artista-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
   
  declarations: [
    ArtistaPesquisaComponent,
    ArtistaFormComponent
  ], 

  imports: [
    CommonModule,
    InputTextModule, ButtonModule, TableModule, TooltipModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ] ,

  exports: [
    ArtistaPesquisaComponent, 
    ArtistaFormComponent
  ] 

})
export class ArtistasModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ErrosModule } from './erros/erros.module';
import { ArtistasModule } from './artistas/artistas.module';
import { AppRotasModule } from './app.rotas.module';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
  ],
  imports: [
    BrowserModule,
    ArtistasModule,
    AppRotasModule,
    ErrosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

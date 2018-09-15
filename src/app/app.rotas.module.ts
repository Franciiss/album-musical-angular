import { NgModule } from "@angular/core";
import { ArtistaPesquisaComponent } from "./artistas/pesquisa/artista-pesquisa.component";
import { ArtistaFormComponent } from "./artistas/artista-form/artista-form.component";

import { RouterModule, Routes, Router } from '@angular/router';
import { Erro404Component } from "./erros/erro404/erro404.component";


const rotas : Routes = [
  {path: '', redirectTo: '/artistas/pesquisa', pathMatch:'full'  },
  {path: 'artistas/pesquisa', component: ArtistaPesquisaComponent  },
  {path: 'artistas/form', component: ArtistaFormComponent  },
  {path: 'artistas/form/:id', component: ArtistaFormComponent  },
  {path: '**', component: Erro404Component  }

];

@NgModule ({
   imports: [ 
       RouterModule.forRoot(rotas) 
    ],
    exports: [RouterModule]
})
export class AppRotasModule { }
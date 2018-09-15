export class Artista {
    artistaId: number;
    nome: string;
    nacionalidade: string;
    albums: Album[]; 
    musicas: Musica[]; 
 }
 
export class Album {
    id: number;
    nome: string;
    ano: number;
    musicas: Musica[]; 
    artistas: Artista[];
}

export class Musica {
    id: number;
    nome: string;
    duracao: number;
    musicas: Musica[]; 
    albums: Album[]; 
}
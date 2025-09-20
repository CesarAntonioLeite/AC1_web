import { Component } from '@angular/core';

interface Noticia {
  titulo: string;
  autor: string;
  data: string;          
  conteudo: string;
  curtidas: number;
  comentarios: string[]; 
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'] // corrigi de styleUrl para styleUrls
})
export class Home {
  noticias: Noticia[] = [];

  constructor() {
    this.noticias = [
      {
        titulo: 'Notícia 1',
        autor: 'Autor 1',
        data: '2023-10-01',
        conteudo: 'Conteúdo da notícia 1',
        curtidas: 0,
        comentarios: []
      },  
      {
        titulo: 'Notícia 2',
        autor: 'Autor 2',
        data: '2023-10-02',
        conteudo: 'Conteúdo da notícia 2',
        curtidas: 0,
        comentarios: []
      },
      {
        titulo: 'Notícia 3',
        autor: 'Autor 3',
        data: '2023-10-03',
        conteudo: 'Conteúdo da notícia 3',
        curtidas: 0,
        comentarios: []
      }
    ];
  }

    curtir(noticia: Noticia) {
    noticia.curtidas++;
  }

  comentar(event: Event, noticia: Noticia) {
    const input = event.target as HTMLInputElement;
    const texto = input.value.trim();
    if (texto) {
      noticia.comentarios.push(texto);
      input.value = '';
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia3',
  imports: [],
  templateUrl: './noticia3.html',
  styleUrl: './noticia3.css'
})
export class Noticia3 {

curtidas: number = 0;
curtir(){this.curtidas++;}

comentarios: string[] = [];
comentar(event: any) {
  this.comentarios.push(event.target.value);
  event.target.value = ' ';
}
}

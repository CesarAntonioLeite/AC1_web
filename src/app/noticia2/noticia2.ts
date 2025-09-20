import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia2',
  imports: [],
  templateUrl: './noticia2.html',
  styleUrl: './noticia2.css'
})
export class Noticia2 {

curtidas: number = 0;
curtir(){this.curtidas++;}

comentarios: string[] = [];
comentar(event: any) {
  this.comentarios.push(event.target.value);
  event.target.value = ' ';
}
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticia1',
  imports: [FormsModule],
  templateUrl: './noticia1.html',
  styleUrl: './noticia1.css'
})
export class Noticia1 {
titulo: string[] = ["Conmebol anula expulsão de Plata, que fica à disposição do Flamengo para a volta contra o Estudiantes"];

curtidas: number = 0;
curtir(){this.curtidas++;}

comentarios: string[] = [];
comentar(event: any) {
  this.comentarios.push(event.target.value);
  event.target.value = ' ';
}
}

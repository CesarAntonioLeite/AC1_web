import { Component } from '@angular/core'; 

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

titulos: string[] = ['titulo1', "titulo2", "titulo3"];
autor: string[] = ['autor1', 'autor2', 'autor3'];
data: string[] = ['data1', 'data2', 'data3'];
conteudo: string[] = ['conteudo1', 'conteudo2', 'conteudo3'];

}

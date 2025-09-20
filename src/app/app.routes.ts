import { Routes } from '@angular/router';
import { Noticia1 } from './noticia1/noticia1';
import { Noticia2 } from './noticia2/noticia2';
import { Noticia3 } from './noticia3/noticia3';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'noticia1', component: Noticia1 },
  { path: 'noticia2', component: Noticia2 },
  { path: 'noticia3', component: Noticia3 },
  { path: '', component: Home }
];

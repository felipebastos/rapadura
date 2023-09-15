import { Component } from '@angular/core';
import { Pokemon } from './pokelista/entities';
import { ListaService } from './pokelista/lista.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rapadura';

  novo: string = '';

  constructor(private lista: ListaService) {}

  pokeselecionado(msg: { id: number }) {}

  soltei(msg: { id: number }) {}

  add() {}
}

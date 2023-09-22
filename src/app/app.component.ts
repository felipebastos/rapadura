import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPokemon } from './store/pokemon.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rapadura';

  novo: string = '';

  constructor(private store: Store) {}

  pokeselecionado(msg: { id: number }) {}

  soltei(msg: { id: number }) {}

  add() {}

  loadPokemon() {
    this.store.dispatch(loadPokemon());
  }
}

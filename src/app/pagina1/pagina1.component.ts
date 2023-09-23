import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { pokemonCapturado } from '../../shared/store/pokemon.actions';
import { selectPokemonId } from '../../shared/store/pokemon.selectors';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css'],
})
export class Pagina1Component {
  ultimo$ = this.store.select(selectPokemonId);

  constructor(private store: Store) {}
}

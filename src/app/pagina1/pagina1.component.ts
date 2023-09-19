import { Component } from '@angular/core';
import { ListaService } from '../pokelista/lista.service';
import { Store } from '@ngrx/store';
import { pokemonCapturado } from '../store/pokemon.actions';
import { Observable } from 'rxjs';
import { selectPokemonId } from '../store/pokemon.selectors';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css'],
})
export class Pagina1Component {
  ultimo$ = this.store.select(selectPokemonId);

  constructor(private store: Store, private lista: ListaService) {}
  pegou(n: number) {
    this.store.dispatch(pokemonCapturado({ id: n }));
    this.lista.capture(n);
  }
}
